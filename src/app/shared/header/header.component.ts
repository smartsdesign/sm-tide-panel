import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
    selector: 'tide-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    isHandset$: Observable<boolean> = this._breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private _breakpointObserver: BreakpointObserver) {}

    ngOnInit() {}
}
