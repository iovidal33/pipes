import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre: string = 'Iron Man';
    nombre2: string = 'iSaiAS OmAr vIdaL PeRez';
    arreglo = [1,2,3,4,5,6,7,8,9,10];
    PI: number = Math.PI;
    porcentaje: number = 0.234;
    salario: number = 1234.5;
    fecha: Date = new Date();
    idioma: string = 'en';
    videoUrl: string = 'https://www.youtube.com/embed/RIKOJP9PHP0';
    activar: boolean = true;

    valorPromesa = new Promise<string>( (resolve) => {
        setTimeout(() => {
            resolve('llego la data');
        }, 4500);
    });

    heroe = {
        nombre: 'Logan',
        clave: 'Wolverine',
        edad: 500,
        direccion:{
        calle: 'X',
        numero: 265
        }
    }
}
