import { GoogleGenAI, Type } from "@google/genai";
import { PolicyResult, SimulationState } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const evaluateTransactionPolicy = async (
  simulation: SimulationState
): Promise<PolicyResult> => {
  try {
    const prompt = `
      You are an AI Financial Policy Engine for autonomous agents.
      Evaluate the following transaction request against the defined policy.
      
      Policy Rules: "${simulation.policy}"
      
      Transaction Request:
      - Vendor: ${simulation.requestVendor}
      - Amount: $${simulation.requestAmount}
      - Category: ${simulation.requestCategory}
      
      Determine if this transaction should be approved or denied based strictly on the policy.
      Also assign a risk score from 0 (safe) to 100 (high risk).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            approved: {
              type: Type.BOOLEAN,
              description: "Whether the transaction is approved based on the policy.",
            },
            reason: {
              type: Type.STRING,
              description: "A short, concise explanation of the decision.",
            },
            riskScore: {
              type: Type.INTEGER,
              description: "A risk score between 0 and 100.",
            },
          },
          required: ["approved", "reason", "riskScore"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as PolicyResult;
    }
    
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini Policy Evaluation Error:", error);
    // Fallback for demo purposes if API fails or key is missing
    return {
      approved: false,
      reason: "Policy engine connection failed. Please try again.",
      riskScore: 0
    };
  }
};