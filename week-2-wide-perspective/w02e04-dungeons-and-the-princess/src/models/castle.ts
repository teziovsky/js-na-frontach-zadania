import { Dungeon } from "./dungeon";
import { Person } from "./person";

export class Castle {
  constructor(private dungeon: Dungeon) {
  }

  gotoTheDungeon(daredevil: Person) {
    // #RQ1: peasant cannot be at the Castle !
    if (daredevil.title === "peasant") {
      console.error('\x1b[31m%s\x1b[0m', "Peasant cannot be at the Castle!");
      console.log();
      return;
    }

    this.dungeon.enter(daredevil);
  }
}