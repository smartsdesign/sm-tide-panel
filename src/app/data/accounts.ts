import { IAccount } from '../models/account.interface';

const custAccounts: IAccount[] = [
    {
        firstName: 'Michael',
        lastName: 'Smith',
        dob: new Date(1982, 9, 2),
        action: 'edit'
    },
    {
        firstName: 'Anna',
        lastName: 'Simpson',
        dob: new Date(1985, 5, 15),
        action: 'edit'
    },
    {
        firstName: 'Banabus',
        lastName: 'Manuka',
        dob: new Date(1965, 8, 12),
        action: 'edit'
    },
    {
        firstName: 'Stefan',
        lastName: 'Stefanov',
        dob: new Date(1999, 11, 25),
        action: 'edit'
    },
    {
        firstName: 'Wes',
        lastName: 'Bos',
        dob: new Date(1989, 11, 26),
        action: 'edit'
    },
    {
        firstName: 'Rachel',
        lastName: 'Navatolova',
        dob: new Date(1989, 7, 26),
        action: 'edit'
    }
];

export { custAccounts };
