import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { CityFormComponent } from './components/city-form/city-form.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { EmplojeeFormComponent } from './components/emplojee-form/emplojee-form.component';
import { EmplojeeListComponent } from './components/emplojee-list/emplojee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    StudentFormComponent,
    StudentListComponent,
    CityFormComponent,
    CityListComponent,
    CompanyFormComponent,
    CompanyListComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ContactsFormComponent,
    ContactsListComponent,
    EmplojeeFormComponent,
    EmplojeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
