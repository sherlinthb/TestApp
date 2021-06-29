import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionInformationComponent } from './sections/section-information/section-information.component';
import { SectionTipsComponent } from './sections/section-tips/section-tips.component';
import { SectionMonitoringComponent } from './sections/section-monitoring/section-monitoring.component';
import { InformationBodyComponent } from './information-body/information-body.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionInformationComponent,
    SectionTipsComponent,
    SectionMonitoringComponent,
    InformationBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
