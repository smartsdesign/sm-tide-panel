/* --------------------------
* Accounts API service
- ---------------------------- **/

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { APIService } from '../services/api.service';
import { IAccount } from '../models/account.interface';


@Injectable()
export class AccountsService {
    constructor(
        private _apiService: APIService
    ) {}

    /**
        * {get} Get all accounts
    */
    public getAccounts(): Observable<IAccount> {
        return this._apiService
            .get<IAccount>('/accounts', {})
            .pipe(
                catchError(err => this._throwErrorMsg(err, 'Error getting accounts'))
            );
    }

    /**
        * {put} Update an account
    */

    public updateAccount(customer: IAccount): Observable<IAccount> {
        return this._apiService
            .put<IAccount>(`/update-customer/${customer.accountId}`, customer, {})
            .pipe(
                catchError(err => this._throwErrorMsg(err, 'Error updating account'))
            );
    }

    private _throwErrorMsg(error, custMsg) {
        return throwError(error || custMsg);
    }
}
