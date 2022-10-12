import { Castle } from "./models/castle";
import { Person } from "./models/person";
import { Underground } from "./models/underground";

export function mission(number: number,hades: Underground, kingdom: Castle, persons: [Person, Person, Person]) {
  console.log(`Misja ratunkowa nr ${number}:`);
  hades.initTheBarricades();
  try {
    kingdom.gotoTheDungeon(persons[0]);
  } catch (error) {
    if (error instanceof Error) {
      console.error('\x1b[31m%s\x1b[0m', error.message);
      console.log();
    }
  }

  try {
    kingdom.gotoTheDungeon(persons[1]);
  } catch (error) {
    if (error instanceof Error) {
      console.error('\x1b[31m%s\x1b[0m', error.message);
      console.log();
    }
  }

  try {
    kingdom.gotoTheDungeon(persons[2]);
  } catch (error) {
    if (error instanceof Error) {
      console.error('\x1b[31m%s\x1b[0m', error.message);
      console.log();
    }
  }
}