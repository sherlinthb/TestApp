import { Component, OnInit } from '@angular/core';
import { Tip } from '../models/tip';
import { SectionTipsComponent } from '../sections/section-tips/section-tips.component';

@Component({
  selector: 'app-tips-and-tricks-body',
  templateUrl: './tips-and-tricks-body.component.html',
  styleUrls: ['./tips-and-tricks-body.component.css']
})
export class TipsAndTricksBodyComponent implements OnInit {

  constructor(private _sectTips: SectionTipsComponent) { }

  tips: Tip[] = [

  ];

  ngOnInit(): void {
    if(this._sectTips.isOption1){
      this.tips = [
        {tipId:1,tipCategory:"ASP.NET",tipLabel:"Measure Everything",tipInfo:"Gather a baseline your application's performance."},
        {tipId:2,tipCategory:"ASP.NET",tipLabel:"Low Hanging Fruit",tipInfo:"Pick items with lowest effort and the largest impact."},
        {tipId:3,tipCategory:"ASP.NET",tipLabel:"Reduce HTTPS request",tipInfo:"Every time the browser needs to open a connection to the server there a tax that must be paid."},

      ];
    }
    if(this._sectTips.isOption2){
      this.tips = [
        {tipId:1,tipCategory:"SQL",tipLabel:"Formatting",tipInfo:"Format your queries so that they are easier to read."},
        {tipId:2,tipCategory:"SQL",tipLabel:"No Lock!",tipInfo:"Always use noLock to reduce contention"},
        {tipId:3,tipCategory:"SQL",tipLabel:"Auditting is a must!",tipInfo:"Make sure all heavily editable tables are auditted for tracking and investigation purposes."},
      ];
    }
    if(this._sectTips.isOption3){
      this.tips = [
        {tipId:1,tipCategory:"Angular",tipLabel:"NULL",tipInfo:"NULL"},
        {tipId:2,tipCategory:"Angular",tipLabel:"NULL",tipInfo:"NULL"},
        {tipId:3,tipCategory:"Angular",tipLabel:"NULL",tipInfo:"NULL"},
      ];
    }
  }


}
