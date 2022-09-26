/**
 * W zasadzie tutaj możesz modyfikować wszystko poza wartościami:
 *
 * - 100 w przypadku PowerSource.
 * - 20 w przypadku LightBulb.
 *
 * Pamiętaj `PowerSource` ma nie wiedzieć — kto z niego korzysta!
 * Dodatkowo — rzucać błąd, jeśli zapas mocy się wyczerpie.
 * */

const MILLISECONDS_IN_SECOND = 1000;

class PowerSource {
  private energySupply = 100 // J

  public consume(energy: number) {
    const rest = this.energySupply - energy;

    if (rest < 0) {
      throw Error("Not enough energy");
    }

    console.log(`Consume ${energy}J. Remaining energy: ` + rest + "J");
    this.energySupply = rest;
  }
}

class LightBulb {
  protected readonly powerConsumption = 20 // W
  private powerSource: PowerSource;
  private consumption: number = -1;

  constructor(powerSource: PowerSource) {
    this.powerSource = powerSource;
  }

  consume () {
    try {
      this.powerSource.consume(this.powerConsumption);
    } catch (error) {
      console.log("Not enough energy. Switching off...");
      this.switchOff();
    }
  }

  switchOff () {
      clearInterval(this.consumption);
  }

  switchOn (seconds: number) {
      let secondsRemain = seconds;

      this.consumption = setInterval(() => {
        if (secondsRemain-- > 0) {
          this.consume();
        } else {
          this.switchOff();
        }
      }, MILLISECONDS_IN_SECOND);
  }
}

const exercise_0 = () => {
  const power = new PowerSource();

  const bulb0 = new LightBulb(power);
  const bulb1 = new LightBulb(power);
  const bulb2 = new LightBulb(power);
  const bulb3 = new LightBulb(power);
  const bulb4 = new LightBulb(power);

  bulb0.switchOn(1);
  bulb1.switchOn(1);
  bulb2.switchOn(1);
  bulb3.switchOn(1);
  bulb4.switchOn(1);

  const bulb5 = new LightBulb(power);
  bulb5.switchOn(1);
}

const exercise_1 = () => {
  const power = new PowerSource();
  const bulb = new LightBulb(power);

  bulb.switchOn(5);
}

exercise_0();