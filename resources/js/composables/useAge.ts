import dayjs from 'dayjs';

export function getAge(birthDate: string): string {
  const birth = dayjs(birthDate);
  const today = dayjs();

  // Years
  const years = today.diff(birth, 'year');

  // Remaining months after subtracting full years
  const months = today.diff(birth.add(years, 'year'), 'month');

  // Remaining days after subtracting full years and months
  const days = today.diff(birth.add(years, 'year').add(months, 'month'), 'day');

  // Build the output string dynamically
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} an${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`mois`);
  if (days > 0) parts.push(`${days} jour${days > 1 ? 's' : ''}`);

  return parts.join(', ');
}
