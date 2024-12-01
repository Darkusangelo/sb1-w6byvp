export function formatPhoneNumber(phone: string): string {
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format based on length and country code
  if (cleaned.startsWith('213')) { // Algeria
    const groups = cleaned.match(/^(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})$/);
    if (groups) {
      return `+${groups[1]} ${groups[2]} ${groups[3]} ${groups[4]} ${groups[5]}`;
    }
  }
  
  return phone; // Return original if no formatting applied
}

export function formatCurrency(amount: number, currency: string = 'DZD'): string {
  return new Intl.NumberFormat('fr-DZ', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }
  return `${(meters / 1000).toFixed(1)}km`;
}