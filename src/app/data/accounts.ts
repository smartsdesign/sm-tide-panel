/**
 * Mock data
 */

import { IAccount } from '../models/account.interface';

const custAccounts: IAccount[] = [
    {
        _id: '5674',
        firstName: 'Michael',
        lastName: 'Smith',
        dob: new Date(1982, 9, 2),
        action: 'edit'
    },
    {
        _id: '2003',
        firstName: 'Anna',
        lastName: 'Simpson',
        dob: new Date(1985, 5, 15),
        action: 'edit'
    },
    {
        _id: '3409',
        firstName: 'Banabus',
        lastName: 'Manuka',
        dob: new Date(1965, 8, 12),
        action: 'edit'
    },
    {
        _id: '5490',
        firstName: 'Stefan',
        lastName: 'Stefanov',
        dob: new Date(1999, 11, 25),
        action: 'edit'
    },
    {
        _id: '5678',
        firstName: 'Wes',
        lastName: 'Bos',
        dob: new Date(1989, 11, 26),
        action: 'edit'
    },
    {
        _id: '9387',
        firstName: 'Rachel',
        lastName: 'Navatolova',
        dob: new Date(1989, 7, 26),
        action: 'edit'
    },
    {
        _id: '9327',
        firstName: 'Marianna',
        lastName: 'Jockovic',
        dob: new Date(1962, 7, 26),
        action: 'edit'
    },
    {
        _id: '2327',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        dob: new Date(1986, 7, 26),
        action: 'edit'
    }
];

export { custAccounts };
