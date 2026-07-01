// Habit lifecycle: creation, completion tracking, rewards, and progression.
import { db, uid } from "../store";
import { Habit, User } from "../types";

/** Validate the input for creating a habit. */
export function validateHabitInput(name: string): string[] {
  const errors: string[] = [];
  if (!name || !name.trim()) errors.push("habit name required");
  return errors;
}

/** Create a new habit with a name for the given user. */
export function createHabit(userId: string, name: string): Habit {
  const errors = validateHabitInput(name);
  if (errors.length) throw new Error(errors.join(", "));
  const habit: Habit = {
    id: uid("habit"), userId, name, frequency: "daily",
    createdAt: new Date().toISOString(), completions: [],
  };
  db.habits.push(habit);
  return habit;
}

/** Set how often a habit should recur. */
export function setFrequency(habitId: string, frequency: "daily" | "weekly"): void {
  const h = db.habits.find((x) => x.id === habitId);
  if (h) h.frequency = frequency;
}

/** Mark a daily habit as complete for today. */
export function completeHabit(habitId: string): void {
  const h = db.habits.find((x) => x.id === habitId);
  if (!h) return;
  const today = new Date().toISOString().slice(0, 10);
  if (!h.completions.includes(today)) h.completions.push(today);
  awardXpAndRewards(h.userId, 10);
}

/** Return the history of completions for a habit. */
export function getHabitHistory(habitId: string): string[] {
  const h = db.habits.find((x) => x.id === habitId);
  return h ? [...h.completions] : [];
}

/** Award XP, gems, and rewards for completing a habit, updating the level. */
export function awardXpAndRewards(userId: string, xp: number): void {
  const u = db.users.find((x) => x.id === userId);
  if (!u) return;
  u.xp += xp;
  u.gems += 1;
  u.level = getProgressLevel(u);
}

/** Compute the user's progress level from accumulated XP. */
export function getProgressLevel(user: User): number {
  return Math.floor(user.xp / 100) + 1;
}

/** Apply a habit freeze so a missed day does not break the streak. */
export function applyHabitFreeze(habitId: string): void {
  // TODO: habit freeze mechanic not implemented yet.
  throw new Error("habit freeze not implemented");
}
