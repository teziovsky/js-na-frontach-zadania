/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

import { PowerSource } from './powerSource';
import { LightBulb } from './lightBulb';

const powerSource = new PowerSource();

try {
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
  console.error(error);
}