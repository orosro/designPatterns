'use strict'
import UserStateSingleton from './UserStoreSingleton';
import {secondaryFunction} from "./secondaryService";

console.log('From index -- ', UserStateSingleton.peek());
secondaryFunction()
console.log('From index -- ', UserStateSingleton.peek());

UserStateSingleton.add = () => {console.log('Should not work')} // This should throw if 'use strict' is used

UserStateSingleton.add('1', 'first user');
console.log(UserStateSingleton.peek());

