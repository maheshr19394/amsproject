import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule, MatCardModule, MatButtonModule  } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { ReportsComponent } from './dashboard/reports/reports.component';
import { AllEmployeesComponent } from './dashboard/reports/all-employees/all-employees.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SlideNavComponent } from './dashboard/slide-nav/slide-nav.component';
import { HeaderBarComponent } from './dashboard/header-bar/header-bar.component';
import { ClientsComponent } from './dashboard/admin/clients/clients.component';
import { AssignmentsComponent } from './dashboard/admin/assignments/assignments.component';
import { EmployeesComponent } from './dashboard/admin/employees/employees.component';
import { AssignmentClinetLinkComponent } from './dashboard/admin/assignment-clinet-link/assignment-clinet-link.component';
import { AssignmentEmployeeLinkComponent } from './dashboard/admin/assignment-employee-link/assignment-employee-link.component';
import { ServerNotFoundComponent } from './server-not-found/server-not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReportsComponent,
    AllEmployeesComponent,
    AdminComponent,
    LoginComponent,
    SlideNavComponent,
    HeaderBarComponent,
    ClientsComponent,
    AssignmentsComponent,
    EmployeesComponent,
    AssignmentClinetLinkComponent,
    AssignmentEmployeeLinkComponent,
    ServerNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    MatInputModule ,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
