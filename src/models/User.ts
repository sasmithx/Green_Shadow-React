export class User{
    id: string;
    email: string;
    password: string;
    role: string;

    constructor(id: string, email: string, password: string, role: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}