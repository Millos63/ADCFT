import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';

import { CityListComponent } from './components/city-list/city-list.component';

import { CompanyListComponent } from './components/company-list/company-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { EmplojeeListComponent } from './components/emplojee-list/emplojee-list.component';



const routes: Routes = [
  {
    path:'', 
    redirectTo:'/emplojees',
    pathMatch:'full'
  },
  {
    path:'emplojees',
    component:EmplojeeListComponent
  },

  {
    path:'', 
    redirectTo:'/cities',
    pathMatch:'full'
  },
  {
    path:'cities',
    component:CityListComponent
  },

  {
    path:'', 
    redirectTo:'/companies',
    pathMatch:'full'
  },
  {
    path:'companies',
    component:CompanyListComponent
  },

  {
    path:'', 
    redirectTo:'/projects',
    pathMatch:'full'
  },
  {
    path:'projects',
    component:ProjectListComponent
  },

  {
    path:'', 
    redirectTo:'/contacts',
    pathMatch:'full'
  },
  {
    path:'contacts',
    component:ContactsListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
