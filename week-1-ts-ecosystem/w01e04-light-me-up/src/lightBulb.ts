 import { PowerSource } from "./powerSource";

export class LightBulb {
  protected readonly powerConsumption = 20;

  constructor(private powerSource: PowerSource) {}

  turnOn() {
    this.powerSource.consume(this.powerConsumption);
    console.log("🔦");
  }

  turnOnDuring(seconds: number) {
    for (let second = 0; second < seconds; second++) {
      setTimeout(() => {
        this.turnOn();
      }, 1000 * second)
    }
  }
}