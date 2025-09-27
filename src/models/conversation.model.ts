// ./src/models/conversation.model.ts

import mongoose, { model, Schema } from "mongoose";
import {
  ConversationDocument,
  ConversationModel,
} from "../types/conversation.js";

const ConversationSchema = new mongoose.Schema<
  ConversationDocument,
  ConversationModel
>(
  {
    agent: {
      type: Schema.Types.ObjectId,
      ref: "Agent",
      required: true,
    },
    sessionId: {
      type: String,
      required: true,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    metadata: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = model<ConversationDocument, ConversationModel>(
  "Conversation",
  ConversationSchema
);

export default Conversation;
