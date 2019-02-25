import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { AccountsService } from '../../services/accounts.service';

import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { IAccount } from 'src/app/models/account.interface';

@Component({
    selector: 'tide-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public _id: string;
    public firstName: string;
    public lastName: string;
    public minDate: Date = new Date('01/01/1900');
    public maxDate: Date = new Date();
    public dob: Date;
    private _dialogConfig: object;
    private _unSubscribe: Subject<void> = new Subject();

    constructor(
        private _accountsService: AccountsService,
        private _formBuilder: FormBuilder,
        private _dialog: MatDialog,
        private _dialogRef: MatDialogRef<EditFormComponent>,
        @Inject(MAT_DIALOG_DATA) data: IAccount,
    ) {
        this._id = data._id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.dob = data.dob;
    }

    ngOnInit() {
        this.form = this._formBuilder.group({
            _id: [this._id, []],
            firstName: [this.firstName, []],
            lastName: [this.lastName, []],
            dob: [this.dob, []],
        });


        this._dialogConfig = {
            height: '200px',
            width: '400px',
            disableClose: true,
            data: this.form.value
        };
    }

    ngOnDestroy(): void {
        this._unSubscribe.next();
        this._unSubscribe.complete();
    }

    public close() {
        this._dialogRef.close();
    }

    public hasError = (controlName: string, errorName: string) => {
        return this.form.controls[controlName].hasError(errorName);
    }

    public submitUpdate() {
        if (this.form.valid) {
            // Update the account record using the PUT (/account/:id)
            // endpoint
            this._accountsService
                .updateAccount(this.form.value)
                .pipe(takeUntil(this._unSubscribe))
                .subscribe(res => {
                    // we'd notify the user here if the update operation was
                    // successful or not, proceed accordingly.
                    const dialogRef = this._dialog.open(SuccessDialogComponent, this._dialogConfig);
                    dialogRef.afterClosed()
                        .subscribe(response => {
                            this._dialogRef.close();
                        });

                });
        }

        // temporary form Submit handling
        // if (this.form.valid) {
        //     const dialogRef = this._dialog.open(SuccessDialogComponent, this._dialogConfig);
        //     dialogRef.afterClosed()
        //         .subscribe(res => {
        //             this._dialogRef.close();
        //         });
        // } else {
        //     // error message handling.
        // }
    }
}
