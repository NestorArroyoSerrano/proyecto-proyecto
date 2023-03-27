import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent implements OnInit{

  constructor(private servicios:EventosService){}

  eventos: IEvento[] = [];
  ngOnInit(){
    console.log("ngOnInit");
    //this.eventos=this.servicios.conseguirEventos();
    this.servicios.conseguirEventos().subscribe(
      eventosFromServer=>this.eventos=eventosFromServer
    );
  }

  /*ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }
*/


  search="";
  desplegable="";
  fondoRojo=false;
  fondoAzul=false;

  orderDate(event:Event){
    event.preventDefault();
    this.search="";
    this.eventos.sort((evento1,evento2)=>new Date(evento1.fecha).getDate()-new Date(evento2.fecha).getDate());
  }

  orderPrice(event:Event){
    event.preventDefault();
    this.search="";
    //this.eventos.sort((evento1,evento2)=>evento1.price<evento2.price?-1:1);
    this.eventos.sort((evento1,evento2)=>evento1.precio-evento2.precio);
  }

  /*anyadirEvento(eventoNuevo: IEvento){
    console.log("Insertar Evento en el Array");
    this.eventos.push(eventoNuevo);
  }*/



   cambiarFondo(){
    if(this.desplegable!="")
      if(this.desplegable=="rojo"){
        this.fondoRojo=true;
        this.fondoAzul=false;
      }
      else{
        this.fondoRojo=false;
        this.fondoAzul=true;
      }
   else{
    this.fondoRojo=false;
    this.fondoAzul=false;
   }
  }

  deleteEvento(evento:IEvento){
    this.eventos=this.eventos.filter(ev=>ev!=evento);
  }

}
