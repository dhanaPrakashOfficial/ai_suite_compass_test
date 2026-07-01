// User profile.
import { db } from "../store";
import { User } from "../types";

/** View the user's profile. */
export function getProfile(userId: string): User | undefined {
  return db.users.find((u) => u.id === userId);
}

/** Edit the user's profile details. */
export function updateProfile(userId: string, changes: Partial<User>): User | undefined {
  const u = getProfile(userId);
  if (u) Object.assign(u, changes);
  return u;
}
