export function daysSinceMilleniumFromToday(today: Date): number {
  const millenium = new Date('2000/1/1');
  const difference = today.getTime() - millenium.getTime();
  const res = difference / (1000 * 3600 * 24);
  return res;
}

export function daysSinceMilleniumFromDate(date: Date): number {
  const millenium = new Date('2000/1/1');
  const difference = date.getTime() - millenium.getTime();
  const res = difference / (1000 * 3600 * 24);
  return res;
}

export const date = daysSinceMilleniumFromToday(new Date());
