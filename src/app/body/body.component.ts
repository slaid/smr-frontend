import { Component, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { UserModel } from '../models/user.model';
import { SystemModel } from '../models/system.model';
import { isUndefined } from "util";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-][a-zA-Z0-9]+)*$/;

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.css']
})

export class BodyComponent {
    private apiUsersURL = 'http://localhost:3000/api/users';
    private apiSystemsURL = 'http://localhost:3000/api/systems';
    usersJSON: any = {};
    filteredUsers: any = [];
    systemsJSON: any = {};
    userFormControl: FormControl;
    filteredStates: any;
    users: Array<UserModel> = [];
    systems: Array<SystemModel> = [];

    states = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];

    constructor(private http: Http) {
        this.getUsersJSON();
        this.getSystemsJSON();

        this.userFormControl = new FormControl();
        this.filteredUsers = this.userFormControl.valueChanges
            .startWith(null)
            .map(name => this.filterUser(name));
        this.filteredStates = this.userFormControl.valueChanges
            .startWith(null)
            .map(name => this.filterState(name));
    }

    private filterState(val: string) {
        return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0) : this.states;
    }

    private filterUser(val: string) {
        let arrayGenerated = this.users.filter(s => s.getFirstName().concat(" " + s.getLastName()).toLowerCase().indexOf(val.toLowerCase()) === 0);
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
}
