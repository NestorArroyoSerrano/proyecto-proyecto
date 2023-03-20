import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent {
  alturaImagen=200;
  @Input() ev!:IEvento;
  @Input() fondoRojo!:boolean;
  @Input() fondoAzul!:boolean;

  @Output() borrarEvento=new EventEmitter<void>();

  deleteEvent(){
    this.borrarEvento.emit();
  }
}
