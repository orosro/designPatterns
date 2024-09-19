type User = {
    id: string;
    name: string;
}

class UserStore {
    private static instance;
    private state: User[] = [];

    constructor() {
        if (!UserStore.instance) {
            UserStore.instance = this;
        }

        return UserStore.instance;
    }

    public add(id: string, name: string) {
     this.state.push({
         id, name
     })
    }

    public get(id: string): User | undefined {
        return this.state.find(user => user.id === id)
    }

    public peek() {
        return this.state;
    }
}

const instance = new UserStore();
Object.freeze(instance);

export default instance;