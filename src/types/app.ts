// ./src/types/app.ts

import { Document, Model, Types } from "mongoose";

export interface App {
  name: string;
  owner: Types.ObjectId;
  default: boolean;
}

export interface AppDocument extends App, Document {}

export interface AppModel extends Model<AppDocument> {}
