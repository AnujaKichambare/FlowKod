import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExamWindowComponent } from './exam-window/exam-window.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavdashboardComponent } from './navdashboard/navdashboard.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';

import { ChartsModule } from 'ng2-charts';
import { TestComponent } from './test/test.component';
import { HighchartsChartComponent } from 'highcharts-angular';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExamWindowComponent,
    DashboardComponent,
    NavdashboardComponent,
    AdminheaderComponent,
    TestComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent},
      {path:'app-login',component:LoginComponent},
      {path:'app-register',component:RegisterComponent},
      {path:'app-dashboard',component:DashboardComponent},
      {path:'app-exam-window',component:ExamWindowComponent},
      {path:'app-navdashboard',component:NavdashboardComponent},
      {path:'app-adminheader',component:AdminheaderComponent},
      {path:'app-test',component:TestComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
