import { Component, ViewChild, NgModule, OnInit, AfterContentInit, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import {
  NgbModule,
  NgbDatepicker,
  NgbInputDatepicker,
  NgbDateStruct,
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDate,
  NgbDatepickerConfig,
  NgbTabset,
  NgbTabChangeEvent
} from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';

import { NgModel } from "@angular/forms";

import { TagInputModule } from 'ngx-chips';

import { Subscription } from 'rxjs';
import { DataTransferService } from '.././data-transfer.service';
import { map } from 'rxjs/operators';

import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

import PubSub from '@aws-amplify/pubsub';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
PubSub.configure(awsmobile)

import Amplify, { Auth } from 'aws-amplify';
import { NavigationEnd, Router } from '@angular/router'

//This is new code for api addition
import { Observable } from 'rxjs';

const now = new Date();
const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentInit {
  
  loading = true;
  error: any;
  text : any;
  locText = ['King County - Washington'];
  startDate: NgbDateStruct;
  maxDate: NgbDateStruct;
  minDate: NgbDateStruct;
  initialDate: any;
  hoveredDate: NgbDateStruct;
  fromDate: any;
  toDate: any;
  locations=[];
  loc=[];
  today = this.calendar.getToday();
  @ViewChild("d", {static: false}) input: NgbInputDatepicker;
  @ViewChild(NgModel, {static: false}) datePick: NgModel;
  @ViewChild('myRangeInput', {static: false}) myRangeInput: ElementRef;
  

  isHovered = date =>
  this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate)
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);
  activeTabUrl: string = "";
 

  set week(value) {
    this.onChange({ year: this.fromDate.year, week: value });
  }

  disabled: boolean = false;
  onChange: (_: any) => void;
  onTouched: any;


  constructor(private config: NgbDatepickerConfig, private data: DataTransferService, element: ElementRef, private renderer: Renderer2, private _parserFormatter: NgbDateParserFormatter, private calendar: NgbCalendar, private apollo: Apollo, private router: Router) {
    const current = new Date();
    config.minDate =  { year: 2000, month: 1, day: 1 };
    this.maxDate = { year: current.getFullYear(), month: current.getMonth() + 1, day: current.getDate() };
    config.outsideDays = "hidden";
  }
  
  ngAfterContentInit(): void {
    this.text = this.calendar.getToday(); 
    this.getToday(this.text, 'getinitialdate');
    this.text = this.initialDate;
    this.updateText(this.text);
    this.updateLocation(this.locText);
  }

  async ngOnInit() {
    this.apollo
    .query<any>({
      query: gql`
      query location{
          location{
            location
          }
        }
      `
    })
    .subscribe(
      ({ data, loading }) => {
        this.locations = data && data.location;
        this.locations=   this.locations.filter(function (el) {
          return el.location != null;
        });
        for (var i = 0; i<this.locations.length; i++){
          this.loc.push(this.locations[i].location);
        }
        this.loading= false;
      },error => {
        this.error = error;
        console.log("error is: ", error);
      }
    ).add(() => {
    })
  }

  displayFramework = "Framework-Combined";
  frameworkOptions = ["Framework-Combined", "SDG", "SPI", "TSF"]

  changeMessage(selectedItem: string){
     this.displayFramework = "Sort by " + selectedItem;
   }

  onSelectedLocation(locChoice){
    this.locText = [locChoice.location];
  }

  updateText(text) {
    this.data.updateData(text);
  }

  updateLocation(locText){
    this.data.updatelocation(locText);
  }

  onTabChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'first') {
      this.router.navigateByUrl('');
    } else if ($event.nextId === 'second') {
      this.router.navigateByUrl('/verbatim');
    }
    else if ($event.nextId === 'third') {
      this.router.navigateByUrl('/about');
    }
  }

  getToday(date: NgbDateStruct, initialData){
    let parsed = '';
    let currentDate = new Date(date.year + "-" + date.month + "-" + date.day);
    let currentTime = currentDate.getDay() ? currentDate.getDay() - 2 : 6;

    let fromDate = new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000);
    this.fromDate = new NgbDate(
      fromDate.getFullYear(),
      fromDate.getMonth() + 1,
      fromDate.getDate()
    );

    let toDate = new Date(fromDate.getTime() + 5 * 24 * 60 * 60 * 1000);
    this.toDate = new NgbDate(
      toDate.getFullYear(),
      toDate.getMonth() + 1,
      toDate.getDate()
    ); 
    if(initialData != ''){
      parsed += this._parserFormatter.format(this.fromDate) + ' to ' + this._parserFormatter.format(this.toDate);
      this.initialDate = parsed;
    } else {
      this.fromDate=this.toDate;
      parsed += this._parserFormatter.format(this.fromDate) + ' to ' + this._parserFormatter.format(this.toDate);
      this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
    }
  }

  getWeek(date: NgbDateStruct) {
    let currentDate = new Date(date.year + "-" + date.month + "-" + date.day);
    let currentTime = currentDate.getDay() ? currentDate.getDay() - 1 : 6;

    let fromDate = new Date(currentDate.getTime() - 6 * 24 * 60 * 60 * 1000);
    this.fromDate = new NgbDate(
      fromDate.getFullYear(),
      fromDate.getMonth() + 1,
      fromDate.getDate()
    )

    let toDate = new Date(fromDate.getTime() + 6 * 24 * 60 * 60 * 1000);
    this.toDate = new NgbDate(
      toDate.getFullYear(),
      toDate.getMonth() + 1,
      toDate.getDate()
    );

    let weekparsed = '';
    weekparsed += this._parserFormatter.format(this.fromDate);
    weekparsed += ' to ' + this._parserFormatter.format(this.toDate);
    this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', weekparsed);
  }


  onDateSelection(date: NgbDate) {
    let parsed = ''; 

        if (!this.fromDate && !this.toDate) {
          this.fromDate = date;
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
          this.toDate = date;
          this.input.close();
          this.input.open();
        } else {
          this.toDate = null;
          this.fromDate = date;
        }
        if(this.fromDate) {
          // if fromDate is set: add the first date
          parsed += this._parserFormatter.format(this.fromDate);
        }
        if(this.toDate!=null) {
          // if toDate is set: add the second date with separator
          parsed += ' to ' + this._parserFormatter.format(this.toDate);
        }
        else if(this.toDate === null){
          parsed += ' to ' + this._parserFormatter.format(this.fromDate);
        }
        // here we update the input value with the new parsed value
        this.renderer.setProperty(this.myRangeInput.nativeElement, 'value', parsed);
  }

  cancelSelection(){

  }
}
