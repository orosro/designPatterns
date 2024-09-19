export const createUser = (id: string, name: string) => {
    return {
        id,
        name,
        greet: () => {
            console.log(`hello ${name} with id ${id}`);
        }
    }
}

const user1 = createUser('1', 'first user')
const user2 = createUser('2', 'second user')

user1.greet();
user2.greet();