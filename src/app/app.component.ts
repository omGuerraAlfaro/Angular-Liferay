import { Component } from '@angular/core';

@Component({
  selector: 'search-portlet-neoris',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-portlet-neoris';

  constructor() {
    console.log("AppComponent constructor");
  }
}

