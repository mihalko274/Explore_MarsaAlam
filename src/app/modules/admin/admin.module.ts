import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminHomComponent } from './components/admin-hom/admin-hom.component';
import { AdminAboutComponent } from './components/admin-about/admin-about.component';
import { AdminContactComponent } from './components/admin-contact/admin-contact.component';
import { AdminServicesComponent } from './components/admin-services/admin-services.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminHomComponent,
    AdminAboutComponent,
    AdminContactComponent,
    AdminServicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
