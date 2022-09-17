import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@arjentienkamp/ngx-mat-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions;
  events: any[] = [];
  date: Date = new Date()
  constructor(
    private modal: NgbModal
  ) {
    this.calendarOptions = new CalendarOptions()
   }

  //   title: string;
  //   date: Date;
  //   startTime: Date;
  //   endTime: Date;
  //   allDay?: boolean;
  //   color?: any;
  //   grid?: CalendarEventGrid;
  //   location?: string;

  ngOnInit(): void {
    this.events.push({title: 'test', date: Date(), allDay: true, color: 'red', startTime: Date(), endTime: Date()})
    console.log(this.events)
  }

  handleEventClick(event: any){}
  handleDateChange(event: any){}
  handleAddButtonClick(){
    this.modal.open(AddEventComponent, {centered: true, backdrop: true})
  }

}
