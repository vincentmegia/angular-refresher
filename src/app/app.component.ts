import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    /**
     * best pratice is to have private variables with "_" and use typescript getter and setter functions
     */
    private _title = 'angular-sketch';
    private _time = '';
    private _formGroup = new FormGroup({
        firstname: new FormControl(''),
        lastname: new FormControl(''),
    });

    get title(): string { return this._title; }
    set title(title: string) { this._title = title; }
    get time(): string { return this._time; }
    set time(time: string) { this._time = time; }
    get formGroup(): FormGroup { return this._formGroup; }

    setTime(time: any) {
        this._time = time;
    }

    onClick(): void {
        this.time = '12:00';
    }
    onSubmit(): void { }
}
