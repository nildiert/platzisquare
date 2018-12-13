import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DetalleComponent} from "./detalle/detalle.component";
import {Routes, RouterModule} from "@angular/router";
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.comopnent';
import { LugaresService } from './contacto/services/lugares.service';

const appRoutes: Routes =[
  {path:'',component:LugaresComponent},
  {path:'lugares',component:LugaresComponent},
  {path:'detalle/:id',component:DetalleComponent},
  {path:'contacto',component:ContactoComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdr7TArbZ2Et-MJBhugpzC-hO2DoJE_TM'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
