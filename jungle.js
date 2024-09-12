class Animal {
    static remainingAnimals = 0;
  
    #name;
    #species;
    #energy;
  
    constructor(name, species, energy) {
      this.#name = name;
      this.#species = species;
      this.#energy = energy;
      Animal.remainingAnimals++;
    }
  
    get name() {
      return this.#name;
    }
  
    get species() {
      return this.#species;
    }
  
    get energy() {
      return this.#energy;
    }
  
    set energy(newEnergy) {
      if (newEnergy <= 0) {
        this.#energy = 0;
        if (Animal.remainingAnimals > 0) Animal.remainingAnimals--;
      } else {
        this.#energy = newEnergy;
      }
    }
  

    attack(target, energyCost) {
      if (this.energy <= 0) {
        console.log(`${this.name} is too tired to attack!`);
        return;
      }
  
      if (target.energy <= 0) {
        console.log(`${target.name} is already out of energy and can't be attacked!`);
        return;
      }
  
      this.energy -= energyCost;
      target.energy -= energyCost;
  
      console.log(`${this.name} energy: ${this.energy}`);
      console.log(`${target.name} energy: ${target.energy}`);
  
      this.checkWinLoss(target);
    }
  
    checkWinLoss(target) {
        if (this.energy === 0 && target.energy === 0) {
            console.log(`It's a tie! Both ${this.name} and ${target.name} ran out of energy at the same time!`);
            return;
          }
      if (this.energy === 0) {
        console.log(`${this.name} has run out of energy and lost!`);
      }
  
      if (target.energy === 0) {
        console.log(`${target.name} has run out of energy and lost!`);
        console.log(`${this.name} wins!`);
      }
    }
  
    eat(amount) {
      this.energy += amount;
      console.log(`${this.name} eats and gains energy!`)
        console.log(`${this.name}'s energy: ${this.energy}`);
    }
  }
  
  class Bird extends Animal {
    #canFly;
  
    constructor(name, species, canFly = true) {
      super(name, species, 100);
      this.#canFly = canFly;
    }
  
    get canFly() {
      return this.#canFly;
    }
  
    set canFly(value) {
      this.#canFly = value;
    }
  
    attack(target) {
        console.log(`${this.name} made ${target.name} fly away!`);
      super.attack(target, 20);
    }
  
    eat() {
      super.eat(10);
    }
  }
  
  class Mammal extends Animal {
    #furColor;
  
    constructor(name, species, furColor) {
      super(name, species, 200);
      this.#furColor = furColor;
    }
  
    get furColor() {
      return this.#furColor;
    }
  
    set furColor(color) {
      this.#furColor = color;
    }
  
    attack(target) {
        console.log(`${this.name} lunges at ${target.name}!`);
      super.attack(target, 50); 
    }
  
    eat() {
      super.eat(20);
    }
  }
  
  class Reptile extends Animal {
    #coldBlooded;
  
    constructor(name, species, coldBlooded = true) {
      super(name, species, 100);
      this.#coldBlooded = coldBlooded;
    }
  
    get coldBlooded() {
      return this.#coldBlooded;
    }
  
    set coldBlooded(isColdBlooded) {
      this.#coldBlooded = isColdBlooded;
    }
  
    attack(target) {
        console.log(`${this.name} infects ${target.name} with poison!`);
      super.attack(target, 30); 
    }
  
    eat() {
      super.eat(15);
    }
  }

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(snake);
eagle.attack(snake);
eagle.attack(snake);
eagle.attack(snake);
eagle.attack(snake);
// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
