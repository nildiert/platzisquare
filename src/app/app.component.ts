import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platziSquare';
  lugares:any = [
    {nombre: 'Veterinaria el becerro'},
    {nombre: 'Floristeria, la pajita'},
    {nombre: 'Donas el Nildiert'},

  ]
  constructor(){
  }

}
 