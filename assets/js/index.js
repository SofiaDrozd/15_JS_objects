// 1)

// const user = {
//     firstName: 'Sofiia',
//     lastName: 'Drozd',
//     email: 'sofia@gmail.com',
//     password: 'qwerty',
//     phoneNumber: '0633333333',
//     address: 'Kyiv, Kyivska 1, d. 3, kv 8',
// }
// console.log(user);

// 2)

const user = {
  firstName: "Sofiia",
  lastName: "Drozd",
  email: "sofia@gmail.com",
  password: "qwerty",
  phoneNumber: "0633333333",
  address: "Kyiv, Kyivska 1, d. 3, kv 8",

  getFullName() {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};
const userFullName = user.getFullName();
console.log("userFullName :>> ", userFullName);

// 3)

for (let key in user) {
  console.log(user[key]);
}

// 4)

const car = {
  color: "white",
  model: "Camry",
  mark: "Toyota",
  engineVolume: 2.5,
  passengers: 5,
  speed: 80,
  maxSpeed: 210,

  accelerate: function (numberOfSpeedPlus) {
    currentSpeed1 = Number(numberOfSpeedPlus + this.speed);
    if ( currentSpeed1 <= this.maxSpeed) {
      return currentSpeed1;
    } else {
        return false;
    }
  },

  deaccelerate: function (numberOfSpeedMinus) {
    currentSpeed2 = Number(this.speed - numberOfSpeedMinus);
    if ( currentSpeed2 >= 0) {
        return currentSpeed2;
    } else {
        return false;
    }
  },

  stop: function () {
    this.speed = 0;
    return this.speed;
  },

};

let currentSpeed1 = 0;
const numberOfSpeedPlus = 8;

currentSpeed1  = car.accelerate(numberOfSpeedPlus);
console.log("currentSpeed1 :>> ", currentSpeed1);

let currentSpeed2 = 0;
const numberOfSpeedMinus = 70;

currentSpeed2 = car.deaccelerate(numberOfSpeedMinus);
console.log('currentSpeed2 :>> ', currentSpeed2);

currentSpeed3 = car.stop();
console.log('currentSpeed3 :>> ', currentSpeed3);

// 5)

function Car (colorOfCar, modelOfCar, markOfCar, engineVolumeOfCar, passengersOfCar, speedOfCar, maxSpeedOfCar ) {
    this.color = colorOfCar;
    this.model = modelOfCar;
    this.mark = markOfCar;
    this.engineVolume = engineVolumeOfCar;
    this.passengers = passengersOfCar;
    this.speed = speedOfCar;
    this.maxSpeed = markOfCar;
}

const car1 = new Car ('black', 'X5', 'BMW', 0.3, 7, 100, 240);
console.log('car1 :>> ', car1);

const car2 = new Car ('blue', 'Civic', 'Honda', 1.8, 5, 50, 200);
console.log('car2 :>> ', car2);