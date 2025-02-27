import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationExampleComponent } from './interpolation-example/interpolation-example.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MyFormComponentComponent } from './my-form-component/my-form-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationExampleComponent,
    MyFormComponentComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardSettingsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
