// Core data types for the Habit Tracker.

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  xp: number;
  gems: number;
  level: number;
}

export interface Habit {
  id: string;
  userId: string;
  name: string;
  frequency: "daily" | "weekly";
  createdAt: string;
  completions: string[]; // ISO dates on which the habit was completed
}
