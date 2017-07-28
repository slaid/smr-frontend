
export class UserModel {
    constructor(private user_id: number, private first_name: string, private last_name: string, private email: string, private username: string, private active: boolean) {
    }
    getID(): number {
        return this.user_id;
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