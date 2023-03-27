import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvento } from '../interfaces/i-evento';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'evento-detalle',
  templateUrl: './evento-detalle.component.html',
  styleUrls: ['./evento-detalle.component.css']
})
export class EventoDetalleComponent implements OnInit {
  evento!:IEvento;


  constructor(private eventosServicio:EventosService,
    private idQueVieneEnlace:ActivatedRoute,
    private enrutarAtras:Router) {}


  ngOnInit() {
    const idEv=+this.idQueVieneEnlace.snapshot.params['id'];
    this.eventosServicio.conseguirEvento(idEv).subscribe(
      ev=>this.evento=ev
    )
  }

  goBack(){
    this.enrutarAtras.navigate(['/eventos']);
  }
}
