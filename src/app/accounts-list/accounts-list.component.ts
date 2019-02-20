import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';

import { EditFormComponent } from '../shared/edit-form/edit-form.component';

import { IAccount } from '../models/account.interface';

import { custAccounts } from '../data/accounts';

@Component({
    selector: 'tide-accounts-list',
    templateUrl: './accounts-list.component.html',
    styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit {

    public dataSource = new MatTableDataSource<IAccount>(custAccounts);

    constructor(private _dialog: MatDialog) {}

    ngOnInit() {}

    public editAccount(custInfo) {
        this._openDialog(custInfo);
    }

    private _openDialog(data) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.data = data;
        this._dialog.open(EditFormComponent, dialogConfig);
    }
}
