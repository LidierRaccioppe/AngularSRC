import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

// funcion que da un numero
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
