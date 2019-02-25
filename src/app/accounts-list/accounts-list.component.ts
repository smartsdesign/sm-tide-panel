import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';

import { AccountsService } from '../services/accounts.service';

import { EditFormComponent } from '../shared/edit-form/edit-form.component';

import { IAccount } from '../models/account.interface';
import { custAccounts } from '../data/accounts';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'tide-accounts-list',
    templateUrl: './accounts-list.component.html',
    styleUrls: ['./accounts-list.component.scss'],
})
export class AccountsListComponent implements OnInit, OnDestroy {

    // public dataSource = new MatTableDataSource<IAccount>(custAccounts);
    public dataSource;
    private _unSubscribe: Subject<void> = new Subject();

    constructor(
        private _accountsService: AccountsService,
        private _dialog: MatDialog
    ) {}

    ngOnInit() {
        // Accounts data API driven service
        this._accountsService
            .getAccounts()
            .pipe(takeUntil(this._unSubscribe))
            .subscribe(response => {
                console.log(response);
                // we'd replace hard-coded customer accounts data (custAccounts) with API data
                // subscribing to this `Observable` stream. This will ensure our UI list data updates when
                // there is a change in the dataSource/database

                this.dataSource = new MatTableDataSource<IAccount>(response);
        });
    }

    // let's clean up the suscriptions
    ngOnDestroy(): void {
        this._unSubscribe.next();
        this._unSubscribe.complete();
    }

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
