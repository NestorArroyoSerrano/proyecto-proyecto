import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Pipe({
  name: 'eventoFiltro'
})
export class EventoFiltroPipe implements PipeTransform {

  transform(arrayEventos:IEvento[], buscar:string): IEvento[] {
    if(buscar){
      return arrayEventos.filter(
      evento=>evento.title.toLocaleUpperCase().includes(buscar.toLocaleUpperCase()) ||
              evento.description.toLocaleUpperCase().includes(buscar.toLocaleUpperCase())
      );
    }
    return arrayEventos;
  }

}
