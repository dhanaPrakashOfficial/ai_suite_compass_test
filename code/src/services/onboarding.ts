// Onboarding: guided multi-step first-run experience.
import { db } from "../store";
import { User } from "../types";

const STEPS = ["welcome", "details", "avatar", "permissions"];

/** Run the multi-step onboarding flow, returning the ordered steps to show. */
export function runOnboardingFlow(): string[] {
  // Welcome note is the first step of the guided flow.
  return [...STEPS];
}

/** Collect the user's basic details during onboarding. */
export function collectUserDetails(user: User, name: string): User {
  user.name = name;
  return user;
}

/** Let the user create an avatar during onboarding. */
export function createAvatar(user: User, choice: string): User {
  // TODO: avatar creation UI and asset handling not built yet.
  throw new Error("avatar creation not implemented");
}
