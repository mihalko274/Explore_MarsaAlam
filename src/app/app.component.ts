import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'Explore_MarsaAlam',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Explore_MarsaAlam';
  @HostListener('window:focus') onFocus() {
    console.log('Focus, call  window.location.reload()');

    // window.location.reload();
  }
}
