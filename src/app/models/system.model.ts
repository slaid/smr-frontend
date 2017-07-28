
export class SystemModel {
    constructor(private id: number, private name: string, private acronym: string, private active: boolean) {
    }

    getID(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getAcronym(): string {
        return this.acronym;
    }

    isActive(): boolean {
        return this.active;
    }
}