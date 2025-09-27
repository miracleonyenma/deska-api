// ./src/types/apiKey.ts

import { Model } from "mongoose";
import { Document, Types } from "mongoose";

export interface ApiKey {
  key: string;
  owner: Types.ObjectId;
  createdAt: Date;
  app?: Types.ObjectId;
  permissions: string[];
}

export interface ApiKeyDocument extends ApiKey, Document {}

export interface ApiKeyModel extends Model<ApiKeyDocument> {}
