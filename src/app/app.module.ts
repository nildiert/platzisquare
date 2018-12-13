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
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from'angularfire2/database';
import { CrearComponent } from './crear/crear.component';

const appRoutes: Routes =[
  {path:'',component:LugaresComponent},
  {path:'lugares',component:LugaresComponent},
  {path:'detalle/:id',component:DetalleComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'crear',component:CrearComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdr7TArbZ2Et-MJBhugpzC-hO2DoJE_TM'
    }),
    BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      AngularFireModule,
      AngularFirestoreModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
