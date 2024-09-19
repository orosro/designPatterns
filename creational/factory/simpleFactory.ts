class User {}
class Customer {}
class Admin {}
class Exception {
    constructor(error: string) {
    }
}

class UserSimpleFactory {
    public static  create($type) {
        switch ($type) {
            case 'user': return new User();
            case 'customer': return new Customer();
            case 'admin': return new Admin();
            default:
                throw new Exception('Wrong user type passed.');
        }
    }
}

