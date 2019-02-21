/**
 * Describes the shape of an account
 */
 export interface IAccount {
     accountId: number;
     firstName: string;
     lastName: string;
     dob: Date;
     action: string;
 }
