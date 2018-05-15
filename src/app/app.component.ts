import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent {
  squareState = 'red';
  title = 'app';
  onClick() {
    this.squareState = this.squareState === 'green' ? 'red' : 'green';
  }
}
