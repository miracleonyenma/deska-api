// ./src/types/agent.ts

import mongoose, { model, Schema } from "mongoose";

export interface App {
  name: string;
  description?: string;
  app: mongoose.Types.ObjectId;
  isActive: boolean;
  knowledgeBase?: string; // Nuclia Knowledge Box ID
  instructions?: string; // System instructions for the agent
  createdAt: Date;
  updatedAt: Date;
}

export interface AgentDocument extends mongoose.Document, App {}

export interface AgentModel extends mongoose.Model<AgentDocument> {}
