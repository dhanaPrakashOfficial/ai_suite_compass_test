// Application settings.
const settings: Record<string, unknown> = { theme: "system", reminders: true };

/** Read the current application settings. */
export function getSettings(): Record<string, unknown> {
  return { ...settings };
}

/** Update application settings. */
export function updateSettings(changes: Record<string, unknown>): void {
  Object.assign(settings, changes);
}
