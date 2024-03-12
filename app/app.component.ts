import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
/*
export class AppComponent {
  title = 'DAM';
  curso = ' "="$';
  // variable que aumenta cada segundo
  segundos: number = 0;

}
*/

export class AppComponent {
  // Inicialización de valores
  textColor: string = 'black';
  backgroundImage: string = 'basket.png';
  buttonColor: string = 'blue';
  clickCount: number = 0;

  constructor(private cookieService: CookieService) {
    // Recuperar el contador de la cookie si existe
    const savedCount = this.cookieService.get('clickCount');
    if (savedCount !== '') {
      this.clickCount = +savedCount; // Convertir a número
    }
  }

  // Función para cambiar los valores al hacer clic en el botón
  onClick() {
    // Generar valores aleatorios entre 1 y 2
    const newValue1 = Math.floor(Math.random() * 2) + 1;
    const newValue2 = Math.floor(Math.random() * 2) + 1;
    const newValue3 = Math.floor(Math.random() * 2) + 1;

    // Actualizar los valores
    this.textColor = newValue1 === 1 ? 'black' : 'brown';
    this.backgroundImage = newValue2 === 1 ? '/assets/images/tennis.png' : '/assets/images/basket.png';
    this.buttonColor = newValue3 === 1 ? 'blue' : 'green';


    // Incrementar el contador y guardarlo en la cookie
    this.clickCount++;
    this.cookieService.set('clickCount', this.clickCount.toString());

  }
}
