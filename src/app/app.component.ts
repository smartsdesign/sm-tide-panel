import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
    selector: 'tide-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public title: string = 'TIDE accounts';
    public appVersion: string = environment.version;

    ngOnInit(): void {}
}
