import { Component, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { UserModel } from '../models/user.model';
import { SystemModel } from '../models/system.model';
import { isUndefined } from "util";
import { User_SystemModel } from '../models/user_system.model';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-][a-zA-Z0-9]+)*$/;

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent {
    private apiUsersURL = 'http://localhost:3000/api/users';
    private apiSystemsURL = 'http://localhost:3000/api/systems';
    private apiUserSystemURL = 'http://localhost:3000/api/user_system';
    usersJSON: any = {};
    filteredUsers: any = [];
    systemsJSON: any = {};
    usersSystemsJSON: any = [];
    userFormControl: FormControl;
    systemFormControl: FormControl;
    users: Array<UserModel> = [];
    usersNamesList: Array<string> = [];
    systems: Array<SystemModel> = [];
    systemsNamesList: Array<string> = [];
    usersSystems: Array<User_SystemModel>;
    userSelected: boolean = false;


    constructor(private http: Http) {
        this.getUsersJSON();
        this.getSystemsJSON();
        this.getUserSystemsJSON();
        this.userFormControl = new FormControl();
        this.filteredUsers = this.userFormControl.valueChanges
            .startWith(null)
            .map(name => this.filterUser(name));
    }


    private filterUser(val: string) {
        return val ? this.usersNamesList.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0) : this.usersNamesList;
    }

    private filterSystem(val: string) {
        return val ? this.systemsNamesList.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0) : this.systemsNamesList;
    }

    private createUsers(): void {
        if (!isUndefined(this.usersJSON.data)) {
            for (let i=0; i<this.usersJSON.data.length; i++) {
                let id = parseInt(this.usersJSON.data[i].user_id);
                let first_name = this.usersJSON.data[i].first_name;
                let last_name = this.usersJSON.data[i].last_name;
                let email = this.usersJSON.data[i].email;
                let username = this.usersJSON.data[i].username;
                let active = this.usersJSON.data[i].active;
                let user: UserModel = new UserModel(id, first_name, last_name, email, username, active);
                this.users.push(user);
                this.usersNamesList.push(first_name + " " + last_name);
            }
        }
    }

    private createSystems(): void {
        if (!isUndefined(this.systemsJSON.data)) {
            for (let i=0; i<this.systemsJSON.data.length; i++) {
                let id = parseInt(this.systemsJSON.data[i].system_id);
                let system_name = this.systemsJSON.data[i].system_name;
                let acronym = this.systemsJSON.data[i].acronym;
                let active = this.systemsJSON.data[i].active;
                let system: SystemModel = new SystemModel(id, system_name, acronym, active);
                this.systems.push(system);
                this.systemsNamesList.push(system_name);
            }
        }
    }

    private createUserSystem(): void {
        if (!isUndefined(this.usersSystemsJSON.data)) {
            for (let i=0; i<this.usersSystemsJSON.data.length; i++) {
                let users_systems_id = parseInt(this.usersSystemsJSON.data[i].users_systems_id);
                let user_id = parseInt(this.usersSystemsJSON.data[i].user_id);
                let system_id = parseInt(this.usersSystemsJSON.data[i].system_id);
                let default_system = this.usersSystemsJSON.data[i].default_system;
                let active = this.usersSystemsJSON.data[i].active;
                let user_system: User_SystemModel = new User_SystemModel(users_systems_id, user_id, system_id, default_system, active);
                this.usersSystems.push(user_system);
            }
        }
    }

    private getData(apiURL: string): any {
        return this.http.get(apiURL)
            .map((response: Response) => response.json());
    }

    private getUsersJSON(): void {
        this.getData(this.apiUsersURL).subscribe(data => {
            console.log(data);
            this.usersJSON = data;
            this.createUsers();
        });
    }

    private getSystemsJSON(): void {
        this.getData(this.apiSystemsURL).subscribe(data => {
            console.log(data);
            this.systemsJSON = data;
            this.createSystems();
        });
    }

    private getUserSystemsJSON(): void {
        this.getData(this.apiUserSystemURL).subscribe(data => {
            console.log(data);
            this.usersSystemsJSON = data;
        })
    }
}
