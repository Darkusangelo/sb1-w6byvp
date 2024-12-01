export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  
  return date.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function isBusinessOpen(workingHours: Record<string, { open: string; close: string }>): boolean {
  const now = new Date();
  const day = now.toLocaleLowerCase().slice(0, 3);
  const currentHours = workingHours[day];

  if (!currentHours) return false;

  const currentTime = `${now.getHours()}:${now.getMinutes()}`;
  return currentTime >= currentHours.open && currentTime <= currentHours.close;
}