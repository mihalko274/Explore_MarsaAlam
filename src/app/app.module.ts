import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { ReefsComponent } from './pages/reefs/reefs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IberotelConstaMaresComponent } from './pages/hotels/iberotel-consta-mares/iberotel-consta-mares.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HotelsComponent,
    ReefsComponent,
    ContactComponent,
    IberotelConstaMaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
