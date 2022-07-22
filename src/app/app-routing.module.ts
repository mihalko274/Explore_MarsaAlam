import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
//import { HomeComponent } from './pages/home/home.component';
import { HotelpageComponent } from './pages/hotelpage/hotelpage.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ReefsComponent } from './pages/reefs/reefs.component';


const routes: Routes = [
  //{ path:'',component:HomeComponent},
  {path:'hotels',component:HotelsComponent},
  { path:'hotels/:hotelName',component:HotelpageComponent},
  { path:'reefs',component:ReefsComponent},
  { path:'contact',component:ContactComponent},
  { path:'login',component:LoginComponent},
  { path:'forgot-password',component:ForgotPasswordComponent},
  { path:'',redirectTo:'/login',pathMatch:'full'},
  {
    path:'admin',
    loadChildren: () =>
    import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  { path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
