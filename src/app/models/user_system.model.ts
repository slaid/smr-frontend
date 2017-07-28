export class User_SystemModel {
    constructor(private id: number, private user_id: number, private system_id: number, private default_system: boolean, private active: boolean) {

    }

    getUserSystemID(): number {
        return this.id;
    }
    getUserId(): number {
        return this.user_id;
    }
    getSystemId(): number {
        return this.system_id;
    }
    isDefaultSystem(): boolean {
        return this.default_system;
    }
    isActive(): boolean {
        return this.active;
    }

}