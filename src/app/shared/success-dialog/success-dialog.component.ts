import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { IAccount } from 'src/app/models/account.interface';

@Component({
    selector: 'tide-success-dialog',
    templateUrl: './success-dialog.component.html',
    styleUrls: ['./success-dialog.component.scss'],
})
export class SuccessDialogComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: IAccount
    ) {}

    ngOnInit() {}
}
