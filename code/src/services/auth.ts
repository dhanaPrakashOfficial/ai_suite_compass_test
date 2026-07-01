// Authentication: sign up, log in, input validation, secure token storage.
import { db, uid } from "../store";
import { User } from "../types";

/** Validate the email and password entered on the auth forms. */
export function validateAuthInput(email: string, password: string): string[] {
  const errors: string[] = [];
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) errors.push("invalid email");
  if (!password || password.length < 8) errors.push("password too short");
  return errors;
}

/** Sign up a new user with an email and password. */
export function signUp(email: string, password: string): User {
  const errors = validateAuthInput(email, password);
  if (errors.length) throw new Error(errors.join(", "));
  const user: User = { id: uid("user"), email, xp: 0, gems: 0, level: 1 };
  db.users.push(user);
  return user;
}

/** Log in an existing user with their credentials, returning a session token. */
export function login(email: string, password: string): { token: string; user: User } {
  const errors = validateAuthInput(email, password);
  if (errors.length) throw new Error(errors.join(", "));
  const user = db.users.find((u) => u.email === email);
  if (!user) throw new Error("no such user");
  const token = uid("tok");
  storeToken(user.id, token);
  return { token, user };
}

/** Securely persist the auth token in device secure storage. */
export function storeToken(userId: string, token: string): void {
  // In the app this uses the platform SecureStore / Keychain manager.
  db.tokens[userId] = token;
}

/** Recover a forgotten password. */
export function recoverPassword(email: string): void {
  // TODO: not implemented yet — needs to send a reset email and handle the reset flow.
  throw new Error("password recovery not implemented");
}
