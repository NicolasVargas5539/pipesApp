import { Component } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Nicolas';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural

  clientes: string[] = ['Maria', 'Pedro', 'Geraldine', 'Nicolas', 'Fernanda'];

  clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  cambiarCliente() {
    this.nombre = 'Fernanda';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Nicolas',
    edad: 23,
    direccion: 'Bogota, Colombia'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'IronMan',
      vuela: 'true'
    },
    {
      nombre: 'Capitan America',
      vuela: 'false'
    },
    {
      nombre: 'Thor',
      vuela: 'true'
    }
  ]

  //Async Pipe

  miObservable = interval(1000); 

  valorPromesa = new Promise(  (resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    }, 3500);
  } );
}

