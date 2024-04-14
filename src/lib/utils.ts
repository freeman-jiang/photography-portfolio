import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// The de-facto unbiased shuffle algorithm is the Fisher–Yates (aka Knuth) Shuffle.
// And here is a JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976
export function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
