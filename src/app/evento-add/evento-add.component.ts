import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IEvento } from '../interfaces/i-evento';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  ngOnInit(): void {
    this.inicializarEvento();
  }

  newEvent!:IEvento;

  inicializarEvento(){
    this.newEvent={
      nombre:"",
      descripcion:"",
      imagen:"",
      precio:0,
      fecha:new Date("")
    };
  }

  constructor(private eventosService:EventosService,
    private enrutarEventosShow:Router){}

 // @Output() eventoNuevo=new EventEmitter<IEvento>();

  addEvent(){
    this.eventosService.addEvento(this.newEvent).subscribe(
      pepe=>{
        //this.eventoNuevo.emit(pepe);
        console.log("Me ha generado el nuevo evento con id:" +pepe.id)
        this.inicializarEvento();
        this.enrutarEventosShow.navigate(['/eventos'])
      }
    )
  }

  changeImage(fileInput: HTMLInputElement) {

    if (!fileInput.files || fileInput.files.length === 0) {
     return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      /*if(reader.result!=null)
        this.newEvent.image = reader.result.toString();
      else
      this.newEvent.image = "";*/
      this.newEvent.imagen = reader.result as string;
    });

   }

}
