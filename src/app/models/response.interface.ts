import { HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Describes the shape of a response from the API
 */
export interface IResponse {
    title: string;
    payload: any;
}

/**
 * Interface describing options parameter used by HttpClient#request
 */
export interface IRequestOptions {
    headers?: HttpHeaders;
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}
