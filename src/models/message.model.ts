// ./src/models/message.model.ts

import mongoose, { model, Schema } from "mongoose";
import { MessageDocument, MessageModel } from "../types/message.js";

const MessageSchema = new mongoose.Schema<MessageDocument, MessageModel>(
  {
    role: {
      type: String,
      required: true,
    },
    sessionId: {
      type: String,
      required: true,
    },
    conversation: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    sources: [
      {
        title: String,
        url: String,
        excerpt: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Message = model<MessageDocument, MessageModel>("Message", MessageSchema);

export default Message;
