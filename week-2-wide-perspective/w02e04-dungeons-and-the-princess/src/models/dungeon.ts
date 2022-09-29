import { Person } from "./person";
import { Underground } from "./underground";

export class Dungeon {
  constructor(private underground: Underground) {
  }

  enter(p: Person) {
    // #RQ2: queen cannot enter the dungeon!
    if (p.title === "queen") {
      console.error('\x1b[31m%s\x1b[0m', "Queen cannot enter the dungeon!");
      console.log();
      return;
    }

    this.underground.enter(p);
  }
}