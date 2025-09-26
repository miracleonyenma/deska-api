// ./src/models/app.model.ts

import mongoose, { model, Schema } from "mongoose";
import { AppDocument, AppModel } from "../types/app.js";

const AppSchema = new mongoose.Schema<AppDocument, AppModel>(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    default: Boolean,
  },
  {
    timestamps: true,
  }
);

const App = model<AppDocument, AppModel>("App", AppSchema);

export default App;
