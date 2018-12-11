import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent{
  title = 'platziSquare';
  lugares:any = [
    {plan: 'pagado',cercania: 1, distancia: 1, active: true, nombre: 'Veterinaria el becerro'},
    {plan: 'gratuito',cercania: 1, distancia: 1.8, active: true, nombre: 'Veterinaria el becerro'},
    {plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Floristeria, la pajita'},
    {plan: 'gratuito',cercania: 2, distancia: 10, active: false, nombre: 'Sushi el gamin'},
    {plan: 'pagado',cercania: 3, distancia: 35, active: true, nombre: 'Hotel la bendicion'},
    {plan: 'gratuito',cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el clavo'},

  ]
  lat:number = 4.613092;
  lng:number = -74.1843277;

  
  constructor(){
  }

}
 