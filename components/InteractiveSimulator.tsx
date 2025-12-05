export async function evaluateTransactionPolicy(simulation) {
  return {
    approved: true,
    riskScore: 10,
    reason: "AI evaluation disabled. Using mock result."
  };
}
