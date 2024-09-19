abstract class AbstractTransportFactory {
    abstract createCar(): Car
    abstract createPlane(): Plane
    // abstract createTrain()
}

class LuxuryTransportFactory extends AbstractTransportFactory {
    createCar() {
        return new LuxuryCar();
    }
    createPlane() {
        return new LuxuryPlane();
    }
}

class BoringTransportFactory extends AbstractTransportFactory {
    createCar() {
        return new BoringCar()
    }
    createPlane() {
        return new BoringPlane()
    }
}


abstract class Car {
    abstract drive();
}

class LuxuryCar extends Car {
    drive() {
        console.log('Driving Luxury Car')
    }
}

class BoringCar extends Car {
    drive() {
        console.log('Driving Boring Car')
    }
}

type Plane =  {
    fly(): void;
}

class LuxuryPlane implements Plane {
    fly() {
        console.log('Flying luxury')
    }
}

class BoringPlane implements Plane {
    fly() {
        console.log('Flying boring')
    }
}



const initMyService = (factory: InstanceType<typeof AbstractTransportFactory>) => {
    const plane = factory.createPlane()
    plane.fly();
    const car = factory.createCar();
    car.drive();
}

const luxuryFactory = new LuxuryTransportFactory();
const boringFactory = new BoringTransportFactory();
initMyService(luxuryFactory)
initMyService(boringFactory)

