/* --------------------------
    Date formating service - leverages momentjs
- ---------------------------- **/

import { NativeDateAdapter } from '@angular/material';
import * as moment from 'moment';

export class CustomDateAdapter extends NativeDateAdapter {
    format(date: Date, displayFormat: Object): string {
        moment.locale('en-GB');
        const formatString = (displayFormat === 'input') ? 'LLL' : 'DD/MM/YYYY';
        return moment(date).format(formatString);
    }
}
