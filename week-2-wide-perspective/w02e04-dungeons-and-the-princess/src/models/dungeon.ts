import { Person } from "./person";
import { Underground } from "./underground";

export class Dungeon {
  constructor(private underground: Underground) {
  }

  enter(p: Person) {
    // #RQ2: queen cannot enter the dungeon!
    if (p.title === "queen") {
      throw new Error("Queen cannot enter the dungeon!");
    }

    this.underground.enter(p);
  }
}