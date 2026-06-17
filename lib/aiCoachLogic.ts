export interface CoachMessage {
  id: string;
  sender: 'coach' | 'user';
  text: string;
  timestamp: Date;
}

export const coachPrompts = {
  welcome: (name: string) => 
    `Hello ${name}! Welcome to the ReadyMe AI framework. Let's begin parsing your structural readiness updates.`,
  excelIntro: () => 
    "Phase 1: Operational Evaluation. Data management and systemic reporting proficiency forms the foundational metric here.",
  excelSuccess: (level: string) => 
    `Assessment Complete! Criteria verified at the ${level} tier. Pipeline optimization metrics have been updated.`,
  simulationIntro: (role: string) => 
    `Transitioning to Phase 2: Live Fire Scenario Arena for the ${role} track. Interactive modeling initializing...`
};
