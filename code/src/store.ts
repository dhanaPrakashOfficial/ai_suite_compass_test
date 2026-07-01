// Simple in-memory store standing in for the backend during development.
import { User, Habit } from "./types";

export const db = {
  users: [] as User[],
  habits: [] as Habit[],
  tokens: {} as Record<string, string>,
};

export function uid(prefix: string): string {
  return prefix + "_" + Math.random().toString(36).slice(2, 9);
}
