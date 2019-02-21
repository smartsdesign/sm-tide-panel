import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    DateAdapter
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

import { APIService } from './services/api.service';
import { AccountsService } from './services/accounts.service';
import { CustomDateAdapter } from './services/customDateAdapter';

import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { EditDialogComponent } from './shared/edit-dialog/edit-dialog.component';
import { EditFormComponent } from './shared/edit-form/edit-form.component';
import { SuccessDialogComponent } from './shared/success-dialog/success-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        AccountsListComponent,
        EditDialogComponent,
        EditFormComponent,
        SuccessDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FlexLayoutModule,
        MatGridListModule
    ],
    providers: [
        APIService,
        AccountsService,
        {
            provide: DateAdapter, useClass: CustomDateAdapter
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        EditDialogComponent,
        EditFormComponent,
        SuccessDialogComponent
    ]
})
export class AppModule {}
