import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WarningAlertComponent } from '../warning-alert/warning-alert.component'; // Import WarningAlertComponent here
import { AppComponent } from '../app.component';
import { SuccessAlertComponent } from '../success-alert/success-alert.component'; // Import SuccessAlertComponent here


@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent, // Declare WarningAlertComponent here
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
