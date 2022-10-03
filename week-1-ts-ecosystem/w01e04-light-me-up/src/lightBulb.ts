import { PowerSource } from "./powerSource";

export class LightBulb {
  protected readonly powerConsumption = 20;

  constructor(private powerSource: PowerSource) {
  }

  turnOn() {
    try {
      this.powerSource.consume(this.powerConsumption);
      console.log("🔦");
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        console.error("Unknown error", error);
      }
    }
  }

  async turnOnDuring(seconds: number) {
    for (let second = 0; second < seconds; second++) {
      await new Promise<void>(async (resolve, reject) => {
        await setTimeout(() => {
          try {
            this.turnOn();
            resolve();
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });
    }
  }
}