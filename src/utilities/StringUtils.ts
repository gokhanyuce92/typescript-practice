import { StringFormat } from "../interfaces/StringFormat";

export const format: StringFormat = (str, isUpper) => {
  return isUpper ? str.toUpperCase() : str.toLowerCase();
};

export function isNullOrEmpty(value: string | null | undefined): boolean {
  return !value || value.trim().length === 0;
}

export function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
