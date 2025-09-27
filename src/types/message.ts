// ./src/types/message.ts

import { Document, Model, Types } from "mongoose";

export interface Message {
  role: "user" | "agent";
  sessionId: string;
  conversation: Types.ObjectId;
  content: string;
  sources: {
    title: string;
    url: string;
    excerpt: string;
  }[];
}

export interface MessageDocument extends Message, Document {}

export interface MessageModel extends Model<MessageDocument> {}
