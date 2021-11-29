import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Contador: number = 0;

  handleCount(value: number){
    this.Contador= value;
  }

}
