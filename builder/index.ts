interface Builder<T> {
    reset(): void
    addDoors(doors: number): this;
    addSeats(seats: number): this;
    getResult(): T
}

type CarT = {
    seats: number;
    engine: string;
    doors: number
}

class Car implements CarT {
    seats =  4;
    engine =  'default';
    doors = 4;
}

class CarBuilder implements Builder<Car> {
    #car: Car;

    constructor() {
        this.reset()
    }

    reset(){
        this.#car = new Car();
    }

    addDoors(doors: number): this {
        this.#car.doors = doors;
        return this;
    }

    addSeats(seats: number): this {
        this.#car.seats = seats;
        return this;
    }

    getResult() {
        return this.#car;
    }
}

(function(){
    const carBuilder = new CarBuilder();
    const car = carBuilder.addDoors(2).addSeats(2).getResult();

    console.log(car)

}())

