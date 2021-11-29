import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-boton-resta',
  templateUrl: './boton-resta.component.html',
  styleUrls: ['./boton-resta.component.css']
})
export class BotonRestaComponent {
  @Input()
  Contador: number = 0;

  @Output()
  onRes: EventEmitter<number> = new EventEmitter()
  res() {
    this.Contador--;
    this.onRes.emit(this.Contador);
  }
}
