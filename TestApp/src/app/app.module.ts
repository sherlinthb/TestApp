import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionInformationComponent } from './sections/section-information/section-information.component';
import { SectionTipsComponent } from './sections/section-tips/section-tips.component';
import { SectionMonitoringComponent } from './sections/section-monitoring/section-monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionInformationComponent,
    SectionTipsComponent,
    SectionMonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
