import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { EventosService } from '../servicios/eventos.service';

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

  constructor(private eventosServicio:EventosService){}

  deleteEvent(){
    //this.borrarEvento.emit();
    this.eventosServicio.borrarEvento(<number>this.ev.id).subscribe({
      next:borrados=>{
        console.log("Mensaje:"+borrados);
        this.borrarEvento.emit();
      },
      error:error=>console.log(error)
    });
  }
}
