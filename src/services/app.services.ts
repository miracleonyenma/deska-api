// ./src/services/app.services.ts

import { Types } from "mongoose";
import App from "../models/app.model.js";
import { UserDocument } from "../types/user.js";
import User from "../models/user.model.js";

interface CreateAppInput {
  name: string;
  default?: boolean;
}

class AppService {
  private user?: UserDocument;

  constructor(args?: { user?: UserDocument }) {
    this.user = args?.user;
  }

  // create a new app
  async createApp({
    data,
    owner,
  }: {
    data: CreateAppInput;
    owner?: UserDocument;
  }) {
    const effectiveOwner = owner?.id || this.user?.id;
    console.log("🏭 Creating app for user", effectiveOwner);
    const app = await App.create({
      name: data.name,
      owner: effectiveOwner,
      default: data.default,
    });
    // if it's the first app for the user, set it as the default on the user record
    setImmediate(async () => {
      const existingApps = await App.find({ owner: effectiveOwner });

      if (!owner?.defaultApp && !existingApps?.length) {
        console.log("🏭 Setting app as default for user", effectiveOwner);
        await User.findByIdAndUpdate(this.user?.id, {
          defaultApp: app._id,
        });
      }
    });
    return app;
  }

  // get all apps
  async getApps(args: { owner?: Types.ObjectId; default?: boolean } = {}) {
    // filters
    const filters = {
      ...((args?.owner || this.user?.id) && {
        owner: args?.owner || this.user?.id,
      }),
      ...(args?.default !== undefined && {
        default: args?.default,
      }),
    };
    return App.find(filters);
  }

  // Function to handle app creation logic
  async handleUserAppCreation(doc: UserDocument) {
    try {
      if (doc.emailVerified) {
        const existingApps = await this?.getApps({ owner: doc.id });
        if (!existingApps?.[0]) {
          const appName = `${doc.firstName}'s App`;
          const app = await this.createApp({
            data: { name: appName, default: true },
            owner: doc,
          });
          // set the user's default app
          await User.findByIdAndUpdate(doc.id, {
            defaultApp: app.id,
          });
        }
        if (!doc.defaultApp) {
          const apps = await this?.getApps({ owner: doc.id, default: true });
          if (apps?.[0]) {
            await User.findByIdAndUpdate(doc.id, {
              defaultApp: apps[0].id,
            });
          }
        }
      }
    } catch (error) {
      console.error("Error creating default app:", error);
    }
  }
}

export default AppService;
