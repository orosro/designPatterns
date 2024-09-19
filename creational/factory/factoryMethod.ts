export type Human = {
    name: string;
    age: number;
}


export abstract class HouseHold {
    public abstract createHuman(options: Human): Human;
}

export class BigFamily extends HouseHold {
    public createHuman(options: Human): Human {
        return {
            name: options.name,
            age: options.age
        };
    }
}

const myBigFamily = new BigFamily()
const human = myBigFamily.createHuman({
    name: 'Cosi',
    age: 6
})
console.log(human)