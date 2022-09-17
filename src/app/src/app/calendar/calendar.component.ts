import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@arjentienkamp/ngx-mat-calendar'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions;
  events: any[] = [];
  date: Date = new Date()
  constructor() {
    this.calendarOptions = new CalendarOptions()
   }

  ngOnInit(): void {
    console.log(this.date)
  }

  handleEventClick(event: any){}
  handleDateChange(event: any){}
  handleAddButtonClick(){
    
  }

}
