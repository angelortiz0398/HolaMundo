import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-boton-suma',
  templateUrl: './boton-suma.component.html',
  styleUrls: ['./boton-suma.component.css']
})
export class BotonSumaComponent {
  @Input()
  Contador: number = 0;

  @Output()
  onAdd: EventEmitter<number> = new EventEmitter()
  add() {
    this.Contador++;
    this.onAdd.emit(this.Contador);
  }
}
