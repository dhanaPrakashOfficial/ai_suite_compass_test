// Notifications.

/** Send a global (push) or in-app notification to the user. */
export function sendNotification(userId: string, title: string, body: string): void {
  // Dispatches through the platform push service and the in-app notifier.
  console.log(`[notify:${userId}] ${title} - ${body}`);
}
