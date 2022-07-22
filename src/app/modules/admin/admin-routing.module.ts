import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAboutComponent } from './components/admin-about/admin-about.component';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminServicesComponent } from './components/admin-services/admin-services.component';

const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
    children:[
      {path: 'home',component:AdminHomComponent},
      {path: 'about',component:AdminAboutComponent},
      {path: 'services',component:AdminServicesComponent},
      {path: 'contact',component:AdminContactComponent},
      {path: '',redirectTo:'/admin/home',pathMatch:'full'},
    ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
