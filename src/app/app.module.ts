import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatCalendarModule } from '@arjentienkamp/ngx-mat-calendar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './src/app/home-page/home-page.component';
import { CalendarComponent } from './src/app/calendar/calendar.component';
import { NavbarComponent } from './src/app/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalendarComponent,
  ],
  imports: [
    NgbModule,
    NavbarComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMatCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
