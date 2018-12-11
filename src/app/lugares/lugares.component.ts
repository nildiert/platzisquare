import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent{
  title = 'platziSquare';
  lugares:any = [
    {id:1 ,plan: 'pagado',cercania: 1, distancia: 1, active: true, nombre: 'Veterinaria el becerro', description:'Descripción de este negocio, Más adelante tendremos más información'},
    {id: 2,plan: 'gratuito',cercania: 1, distancia: 1.8, active: true, nombre: 'Veterinaria el becerro', description:'Descripción de este negocio, Más adelante tendremos más información'},
    {id: 3,plan: 'gratuito',cercania: 2, distancia: 5, active: true, nombre: 'Floristeria, la pajita', description:'Descripción de este negocio, Más adelante tendremos más información'},
    {id: 4,plan: 'gratuito',cercania: 2, distancia: 10, active: false, nombre: 'Sushi el gamin', description:'Descripción de este negocio, Más adelante tendremos más información'},
    {id: 5,plan: 'pagado',cercania: 3, distancia: 35, active: true, nombre: 'Hotel la bendicion', description:'Descripción de este negocio, Más adelante tendremos más información'},
    {id: 6,plan: 'gratuito',cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el clavo', description:'Descripción de este negocio, Más adelante tendremos más información'},

  ];
  lat:number = 4.613092;
  lng:number = -74.1843277;

  
  constructor(){
  }

}
 