import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent{
  title = 'platziSquare';

  lat:number = 4.613092;
  lng:number = -74.1843277;

  lugares = null;
  constructor(private lugaresService:LugaresService){
    this.lugares = lugaresService.getLugares();
  }

}
