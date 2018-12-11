import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent{
  title = 'platziSquare';
  lugares:any = [
    {id:1 ,plan: 'pagado',cercania: 1, distancia: 1, active: true, nombre: 'Veterinaria el becerro'},
    {id: 2,plan: 'gratuito',cercania: 1, distancia: 1.8, active: true, nombre: 'Veterinaria el becerro'},
    {id: 3,plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Floristeria, la pajita'},
    {id: 4,plan: 'gratuito',cercania: 2, distancia: 10, active: false, nombre: 'Sushi el gamin'},
    {id: 5,plan: 'pagado',cercania: 3, distancia: 35, active: true, nombre: 'Hotel la bendicion'},
    {id: 6,plan: 'gratuito',cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el clavo'},

  ]
  lat:number = 4.613092;
  lng:number = -74.1843277;

  
  constructor(){
  }

}
 