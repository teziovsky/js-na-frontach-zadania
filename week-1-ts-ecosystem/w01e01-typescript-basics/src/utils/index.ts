import { User } from "../types";

export function hasAddress(user: User): boolean {
  return Boolean(user.address);
}

function hasGivenAge(requiredAge: number): (user: User) => boolean {
  return (user: User): boolean => user.age >= requiredAge;
}

export const isAdult: (user: User) => boolean = hasGivenAge(18);
