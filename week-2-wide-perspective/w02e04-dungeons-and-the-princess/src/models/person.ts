type Title = 'princess' | 'king' | 'queen' | 'knight' | 'peasant'

export class Person {
  constructor(private name: string, public readonly title: Title) {
  }

  shoutTheName() {
    console.log(`I'am ${this.name}! The ${this.title}.`);
  }

  sayThanks() {
    console.log();
    console.log('\x1b[33m%s\x1b[0m', `${this.name}: Thank you...`);
  }
}