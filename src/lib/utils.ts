import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* my custom utility functions */

// capitalizes the first letter of a string
export const capitalize = (s: string) => s[0] + s.slice(1);
