import React from 'react';

export enum AgentActionType {
  SPEND = 'SPEND',
  APPROVE = 'APPROVE',
  TRANSFER = 'TRANSFER'
}

export interface PolicyResult {
  approved: boolean;
  reason: string;
  riskScore: number;
}

export interface SimulationState {
  policy: string;
  requestAmount: number;
  requestVendor: string;
  requestCategory: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}