import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelpageComponent } from './pages/hotelpage/hotelpage.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ReefsComponent } from './pages/reefs/reefs.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'hotels/:hotelName',component:HotelpageComponent},
  {path:'reefs',component:ReefsComponent},
  {path:'contact',component:ContactComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
