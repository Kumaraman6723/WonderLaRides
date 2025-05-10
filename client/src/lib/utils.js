import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges Tailwind CSS classes
 * @param {...string|object} inputs - Class names or objects with conditional classes
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
