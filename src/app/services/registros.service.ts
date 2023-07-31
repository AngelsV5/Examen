import { Injectable } from '@angular/core';


export interface Registro {
  
  codig: string;
  fecha: string;
  cliente: string;
  tipoi: string;
  descripcion: string;
  idx?: number;
  
}
@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  private registros:Registro[]=[
    {
        codig: "001",
        fecha: "2023-05-04",
        cliente: "Pedro",
         tipoi: "Instagram",
        descripcion: "Se ha realizado a traves de la reed social instagram"
       
    },
    {
      codig: "002",
        fecha: "2023-05-03",
        cliente: "Juan",
        tipoi: "Facebook",
        descripcion: "Se ha realizado a traves de la reed social Facebook"
  },
  {
    codig: "003",
    fecha: "2023-05-08",
    cliente: "Luis",
    tipoi: "Instagram",
    descripcion: "Se ha realizado a traves de la reed social instagram"
  },
  {
    codig: "004",
    fecha: "2023-05-14",
    cliente: "Pedro",
    tipoi: "Facebook",
    descripcion: "Se ha realizado a traves de la reed social facebook"
  },
  {
    codig: "005",
    fecha: "2023-05-05",
    cliente: "Pedro",
    tipoi: "Instagram",
    descripcion: "Se ha realizado a traves de la reed social instagram"
  },
  {
    codig: "006",
        fecha: "2023-05-03",
        cliente: "Pepe",
        tipoi: "Facebook",
        descripcion: "Se ha realizado a traves de la reed social Fcebook"
  },
  {
    codig: "007",
    fecha: "2023-06-04",
    cliente: "Maria",
    tipoi: "Instagram",
    descripcion: "Se ha realizado a traves de la reed social instagram"
  },
  {
    codig: "008",
        fecha: "2023-02-04",
        cliente: "Ana",
        tipoi: "Facebook",
        descripcion: "Se ha realizado a traves de la reed social facebook"
  },
  {
    codig: "009",
        fecha: "2023-06-01",
        cliente: "Felipe",
        tipoi: "Instagram",
        descripcion: "Se ha realizado a traves de la reed social instagram"
  },
  {
    codig: "010",
        fecha: "2023-05-04",
        cliente: "Alexandra",
        tipoi: "Instagram",
        descripcion: "Se ha realizado a traves de la reed social instagram"
},
  ];

  constructor() {
    console.log("Servicio listo para usar...");
   }
  getRegistros()
  {
    return this.registros;
  }

  getRegistro(idx:number):Registro{
    return this.registros[idx];
  }

};
