import classNames from "classnames";
import { twMerge } from "tailwind-merge";

type ClassInput = Parameters<typeof classNames>[number];

/**
 * Merge Tailwind class names safely (shadcn-style `cn` helper).
 */
export function cn(...inputs: ClassInput[]) {
  return twMerge(classNames(...inputs));
}
