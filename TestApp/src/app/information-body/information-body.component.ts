import { AstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Info} from '../../app/models/info';
import { SectionInformationComponent } from '../sections/section-information/section-information.component';

const SAMPLE_INFO_DATA: any[] = [
  
];

@Component({
  selector: 'app-information-body',
  templateUrl: './information-body.component.html',
  styleUrls: ['./information-body.component.css']
})
export class InformationBodyComponent implements OnInit {

  constructor(private _sectInfo: SectionInformationComponent) { }

  infos: Info[] =[
    
  ];


  ngOnInit(): void {
    if(this._sectInfo.isOption1){
      this.infos = [
      {id:1,category:"Asp.net", label:"Asp.net LifeCycles", information: "There are the Cycles the page goes through when it runs."},
      {id:2,category:"Asp.net", label:"Asp.net DataSources", information: "A data source  control interacts with the data bound controls and hides the complex data binding processes."},
      {id:3,category:"Asp.net", label:"Asp.net TestLabel", information: "This is an another test in hopes that the page operates as expected."},];
    }
    else if (this._sectInfo.isOption2){
      this.infos = [
        {id:1,category:"SQL", label:"SQL STUFF", information: "Learn SQL information here."},
      {id:2,category:"SQL", label:"More SQL Stuff", information: "Database queries,organize schema, contain sound data."},
      {id:3,category:"SQL", label:"Even More SQL Stuff", information: "Test test test yes this is a test"},
      ];
    }
    else if (this._sectInfo.isOption3){
      this.infos = [
        {id:1,category:"Angular", label:"NULL", information: "NULL"},
        {id:2,category:"Angular", label:"NULL", information: "NULL"},
        {id:3,category:"Angular", label:"NULL", information: "NULL"},
      ];
    }
  }

}
