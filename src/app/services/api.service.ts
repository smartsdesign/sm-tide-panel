/** ---------------------------
 * REST API service abstraction.
 ----------------------------- */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IResponse, IRequestOptions } from '../models/response.interface';
import { environment } from '../../environments/environment';

@Injectable()
export class APIService {

    constructor(private _http: HttpClient) { }

    request<T>(method: string, path: string, body: any|null, options: IRequestOptions): Observable<T> {
        if (['get', 'delete', 'post', 'put'].indexOf(method) === -1) {
            return Observable.throw('Invalid HTTP method');
        }

        if (method === 'get' || method === 'delete') {
            options.headers = new HttpHeaders({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            });
            return this._http[method]<IResponse>(
                environment.API_URL + path,
                options
            ).pipe(
                map((response) => {
                return response.payload as T;
                })
            );
        } else if (method === 'post' || method === 'put') {
            return this._http[method]<IResponse>(
                environment.API_URL + path,
                body,
                options
            ).pipe(map((response) => {
                return response.payload as T;
                })
            );
        }
    }
    get<T>(path: string, options: IRequestOptions): Observable<T> {
        return this.request('get', path, null, options);
    }
    delete<T>(path: string, options: IRequestOptions): Observable<T> {
        return this.request('delete', path, null, options);
    }
    post<T>(path: string, body: any, options: IRequestOptions): Observable<T> {
        return this.request('post', path, body, options);
    }
    put<T>(path: string, body: any, options: IRequestOptions): Observable<T> {
        return this.request('put', path, body, options);
    }
}
