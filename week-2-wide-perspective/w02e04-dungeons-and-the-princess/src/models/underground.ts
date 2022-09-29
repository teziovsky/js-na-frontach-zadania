import { Person } from "./person";

export class Underground {
  private static INITIAL_NO_OF_BARRICADES = 3;
  private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES;

  constructor(private prisoner: Person) {
  }

  enter(savior: Person) {
    // #RQ3: king cannot enter Underground !
    if (savior.title === "king") {
      console.error('\x1b[31m%s\x1b[0m', "King cannot enter Underground!");
      console.log();
      return;
    }

    savior.shoutTheName();
    this.saveThePrisoner(savior);
  }

  // Clean state:
  initTheBarricades() {
    this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES;
  }

  private saveThePrisoner(savior: Person) {
    // #RQ4: only knight can attempt to save prisoner!
    // #RQ5: If not knight Evil dragon will set up new barricade
    // #RQ6: one knight will remove one barricade
    if (savior.title !== "knight") {
      console.error('\x1b[31m%s\x1b[0m', "Only knight can attempt to save prisoner!");
      console.log();
      this.setNewBarricade();
    }

    if (savior.title === "knight") {
      this.removeBarricade();
    }

    if (this.hasNoBarricades()) {
      this.prisoner.sayThanks();
    }
  }

  private setNewBarricade() {
    this.noOfBarricades += 1;
  }

  private removeBarricade() {
    this.noOfBarricades -= 1;
  }

  private hasNoBarricades() {
    return this.noOfBarricades === 0;
  }
}