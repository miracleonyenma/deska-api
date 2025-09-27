import mongoose, { model, Schema } from "mongoose";
import { AgentDocument, AgentModel } from "../types/agent.js";

const AgentSchema = new mongoose.Schema<AgentDocument, AgentModel>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    app: {
      type: Schema.Types.ObjectId,
      ref: "App",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    knowledgeBase: {
      type: String, // Nuclia KB ID
    },
    instructions: {
      type: String,
      default: "You are a helpful customer support assistant.",
    },
  },
  {
    timestamps: true,
  }
);

const App = model<AgentDocument, AgentModel>("Agent", AgentSchema);

export default App;
