import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventoShowComponent } from './evento-show/evento-show.component';
import { EventoFiltroPipe } from './pipes/evento-filtro.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventosService } from './servicios/eventos.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './interceptores/base-url.interceptor';
import { EventoDetalleComponent } from './evento-detalle/evento-detalle.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EventoShowComponent,
    EventoFiltroPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventoDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [EventosService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
