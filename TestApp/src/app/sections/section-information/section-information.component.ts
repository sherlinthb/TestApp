import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-information',
  templateUrl: './section-information.component.html',
  styleUrls: ['./section-information.component.css']
})
export class SectionInformationComponent implements OnInit {

  constructor() { }

  isOption1: boolean = true;
  isOption2: boolean = false;
  isOption3: boolean = false;

  ngOnInit(): void {
    
  }

  onOption1(): void{
    this.isOption1 = true;
    this.isOption2 = false;
    this.isOption3 = false;

  }

  onOption2(): void {
    this.isOption1 = false;
    this.isOption2 = true;
    this.isOption3 = false;
  }

  onOption3(): void {
    this.isOption1 = false;
    this.isOption2 = false;
    this.isOption3 = true;
  }

}
