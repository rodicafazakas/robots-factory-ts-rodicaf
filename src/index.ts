enum Type {
  Cleaner,
  Waiter, 
  Developer
}

interface Robot {
	name: string;
	type: Type;
  power: number;
  message: string;
}

class Robot implements Robot{
  name: string;
  type: Type;
  power: number;
  message: string;

  constructor(name: string, type: Type, number: number, message: string) {
    this.name = name;
    this.type = type;
    this.power = number;
    this.message = message;
  }

  trabajar() {
    console.log( this.message);
  }
} 

const robot: Robot = new Robot("Murphy", Type.Cleaner, 100, "Larala larita, I clean my little house");

robot.trabajar();

const createRobot = (type) => {};