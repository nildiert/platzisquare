import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platziSquare';
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Veterinaria el becerro'},
    {cercania: 1, distancia: 1.8, active: true, nombre: 'Veterinaria el becerro'},
    {cercania: 2, distancia: 5, active: true, nombre: 'Floristeria, la pajita'},
    {cercania: 2, distancia: 10, active: false, nombre: 'Sushi el gamin'},
    {cercania: 3, distancia: 35, active: true, nombre: 'Hotel la bendicion'},
    {cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el clavo'},

  ]
  lat:number = 4.613092;
  lng:number = -74.1843277;

  
  constructor(){
  }

}
 