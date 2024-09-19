import UserStateSingleton from './UserStoreSingleton';
import UserStoreSingleton from "./UserStoreSingleton";


export const secondaryFunction = () => {
    console.log('From secondary -- ', UserStateSingleton.peek());

    UserStoreSingleton.add('2', 'secondary user')
}
