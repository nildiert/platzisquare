import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platziSquare';
  lugares:any = [
    {active: true, nombre: 'Veterinaria el becerro'},
    {active: true, nombre: 'Veterinaria el becerro'},
    {active: true, nombre: 'Floristeria, la pajita'},
    {active: false, nombre: 'Sushi el gamin'},
    {active: true, nombre: 'Hotel la bendicion'},
    {active: false, nombre: 'Zapateria el clavo'},

  ]
  lat:number = 4.613092;
  lng:number = -74.1843277;
  constructor(){
  }

}
 