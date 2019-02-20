import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'tide-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
    public form: FormGroup;
    public firstName: string;
    public lastName: string;
    public dob: Date;

    constructor(
        private _formBuilder: FormBuilder,
        private _dialogRef: MatDialogRef<EditFormComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.dob = new Date(data.dob);
        }

    ngOnInit() {
        this.form = this._formBuilder.group({
            firstName: [this.firstName, []],
            lastName: [this.lastName, []],
            dob: [new Date(this.dob), []]
        });
    }

    public close() {
        this._dialogRef.close();
    }

    public submitUpdate() {
        this._dialogRef.close(this.form.value);
    }
}
