/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Bus {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    windowNum,
    doorOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.windowNum = windowNum; 
    this.doorOpen = doorOpen;
  }
  // Add methods like normal functions:
  toggleDoor(doorStatus) {
    this.doorOpen = doorStatus;
  }
}

export default Bus;
