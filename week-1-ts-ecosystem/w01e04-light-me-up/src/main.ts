/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import { LightBulb } from "./lightBulb";
import { PowerSource } from "./powerSource";

(() => {
  try {
    console.log("Excercise 1");

    const powerSource = new PowerSource();

    const lightBulb1 = new LightBulb(powerSource);
    lightBulb1.turnOn();

    const lightBulb2 = new LightBulb(powerSource);
    lightBulb2.turnOn();

    const lightBulb3 = new LightBulb(powerSource);
    lightBulb3.turnOn();

    const lightBulb4 = new LightBulb(powerSource);
    lightBulb4.turnOn();

    const lightBulb5 = new LightBulb(powerSource);
    lightBulb5.turnOn();

    const lightBulb6 = new LightBulb(powerSource);
    lightBulb6.turnOn();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error", error);
    }
  }
})();

(async () => {
  try {
    console.log();
    console.log("Excercise 2");

    const powerSource = new PowerSource();

    const lightBulb1 = new LightBulb(powerSource);
    await lightBulb1.turnOnDuring(6);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error", error);
    }
  }
})();
