import { Component } from '@angular/core';
import { RegistrosService, Registro } from 'src/app/services/registros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})

export class RegistrosComponent {

  registros: Registro[]=[];

  ngOnInit(): void{
    this.registros= this. _registrosServices.getRegistros();
    console.log(this.registros);
  }

  constructor(private _registrosServices:RegistrosService,private router: Router){
    
  }
  
  verRegistros(idx: number){
    console.log(idx);
    this.router.navigate(['/registro', idx]);
  }

 
}