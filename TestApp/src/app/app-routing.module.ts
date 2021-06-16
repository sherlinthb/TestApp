import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionInformationComponent } from './sections/section-information/section-information.component';
import { SectionMonitoringComponent } from './sections/section-monitoring/section-monitoring.component';
import { SectionTipsComponent } from './sections/section-tips/section-tips.component';


export const appRoutes: Routes = [
  {path:'information', component: SectionInformationComponent},
  {path:'tips', component: SectionTipsComponent},
  {path:'monitoring', component: SectionMonitoringComponent},

  {path:'',redirectTo: '/information',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
