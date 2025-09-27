// ./src/types/conversation.ts

import { Document, Model, Types } from "mongoose";

export interface Conversation {
  agent: Types.ObjectId;
  sessionId: string;
  messages: Types.ObjectId[];
  metadata: Record<string, any> & {
    userAgent: string;
    ip: string;
    referer: string;
  };
}

export interface ConversationDocument extends Conversation, Document {}

export interface ConversationModel extends Model<ConversationDocument> {}
