
export class SystemModel {
    private id: number;
    private name: string;
    private acronym: string;
    private active: boolean;

    constructor(id: number,name: string,acronym: string,active: boolean) {
        this.id = id;
        this.name = name;
        this.acronym = acronym;
        this.active = active;
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