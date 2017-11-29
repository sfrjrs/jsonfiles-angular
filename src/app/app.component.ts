import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // Properties
  private title : string;

  // Init
  public constructor() {
    this.updateSiteName('jsonFiles');
    this.title = this.getSiteName();
  }

  // Get | Return site title
  public getSiteName() : string
  {
    return this.title;
  }

  // Set | Update site title
  public updateSiteName(newName : string)
  {
    this.title = newName;
  }

}
