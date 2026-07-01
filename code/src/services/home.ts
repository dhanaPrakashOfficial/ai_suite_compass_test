// Home dashboard: summaries of the user's habits and progress.
import { db } from "../store";
import { Habit } from "../types";

/** Get all habits belonging to the user. */
export function getAllHabits(userId: string): Habit[] {
  return db.habits.filter((h) => h.userId === userId);
}

/** Get the habits scheduled for today. */
export function getTodaysHabits(userId: string): Habit[] {
  return getAllHabits(userId).filter((h) => h.frequency === "daily");
}

/** Count the user's active habits. */
export function getActiveHabitCount(userId: string): number {
  return getAllHabits(userId).length;
}

/** Compute the user's current active streak in days. */
export function getActiveStreak(userId: string): number {
  const days = new Set<string>();
  for (const h of getAllHabits(userId)) h.completions.forEach((d) => days.add(d));
  let streak = 0;
  const cursor = new Date();
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

/** Compute the average habit completion rate for the user. */
export function getCompletionRate(userId: string): number {
  const habits = getAllHabits(userId);
  if (!habits.length) return 0;
  const rates = habits.map((h) => (h.completions.length > 0 ? 1 : 0));
  return rates.reduce((a, b) => a + b, 0) / habits.length;
}

/** Show a calendar view of habit activity. */
export function getCalendarView(userId: string): unknown {
  // TODO: calendar heat-map view not implemented yet.
  throw new Error("calendar view not implemented");
}
