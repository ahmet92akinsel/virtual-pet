function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.isAlive = {
    age: this.age,
    hunger: this.hunger,
    fitness:this.fitness
  }
  const MAXIMUM_FITNESS = 10;

  this.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  this.walk = function () {
    this.fitness += 4;
  };
  this.feed = function () {
    let hungerLevel = this.hunger;
    if (hungerLevel === 0 || hungerLevel <= 0) {
      return false;
    } else {
      return (this.hunger -= 3);
    }
  };

  this.checkUp = function () {
    this.fitness;
    this.hunger;
    let petNeedsWalk = this.fitness <= 3;
    let petsHunger = this.hunger >= 5;
    let petWantsWalkAndFood = (petNeedsWalk, petsHunger);

    if (petWantsWalkAndFood === true) {
      return `I am hungry AND I need a walk`;
    }else {
      return `I fell great!`;
    };
  };
      if (this.fitness <= 3) {
    return `I need a walk`;
  }
      if (this.hunger >= 5) {
    return `I am hungry`;
  };
  Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };
  /*Pet.prototype.walk = function() {
    this.fitness += 4;
};

Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};
Pet.prototype.feed = function() {
    if (this.hunger <= 3) {
        this.hunger = 0;
    } else {
        this.hunger -= 3;
    }
}






*/
};

module.exports = Pet;
