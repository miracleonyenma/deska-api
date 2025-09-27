// ./src/models/apiKey.model.ts

import { Model } from "mongoose";
import { Schema, model, Document, Types } from "mongoose";
import { ApiKeyDocument, ApiKeyModel } from "../types/apiKey.js";

const apiKeySchema = new Schema<ApiKeyDocument, ApiKeyModel>({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  app: {
    type: Schema.Types.ObjectId,
    ref: "App",
  },
  permissions: [
    {
      type: String,
      enum: ["read", "write", "chat"],
      default: ["chat"],
    },
  ],
});

export default model<ApiKeyDocument, ApiKeyModel>("ApiKey", apiKeySchema);
