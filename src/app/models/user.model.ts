
export class UserModel {
    private id: number;
    private first_name: string;
    private last_name: string;
    private email: string;
    private username: string;
    private active: boolean;

    constructor(user_id: number, first_name: string, last_name: string, email: string, username: string, active: boolean) {
        this.id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.username = username;
        this.active = active;
    }
    getID(): number {
        return this.id;
    }
    getFirstName(): string {
        return this.first_name;
    }
    getLastName(): string {
        return this.last_name;
    }
    getEmail(): string {
        return this.email;
    }
    getUsername(): string {
        return this.username;
    }
    isActive(): boolean {
        return this.active;
    }
}