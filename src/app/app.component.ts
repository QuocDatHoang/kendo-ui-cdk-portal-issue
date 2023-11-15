import { Component } from '@angular/core';
import { MenuItem } from '@progress/kendo-angular-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPortal = false;
  items: MenuItem[] = [
    {
      text: 'Item 1',
      items: [
        { text: 'Item 1.1' },
        { text: 'Item 1.2' }
      ]
    },
    {
      text: 'Item 2',
      items: [
        { text: 'Item 2.1' },
        { text: 'Item 2.2' }
      ]
    }
  ];
  
  openPortal() {
    this.showPortal = true;
  }

  closePortal() {
    this.showPortal = false;
  }
}
