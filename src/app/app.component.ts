import { Component } from '@angular/core';
import {Mascota} from './modelos/mascota';
//import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-refugio';
  mascotaArray: Mascota[]=[
    {id:1,nombre:"Mora",sexo:"Hembra",raza:"Yorkie",edad:3,foto:"foto"},
    {id:2,nombre:"Bethoveen",sexo:"Macho",raza:"San Bernardo",edad:5,foto:"foto"},
    {id:3,nombre:"Wayra",sexo:"Hembra",raza:"Labrador",edad:6,foto:"foto"},

  ];
  selectedMascota: Mascota = new Mascota();
  addOrEdit(){
    if(this.selectedMascota.id==0){
      this.selectedMascota.id=this.mascotaArray.length+1;
      this.mascotaArray.push(this.selectedMascota);
    }
    this.selectedMascota = new Mascota();
   
  }
  RowSelected(mascota: Mascota){
    this.selectedMascota=mascota;
  }
  delete(){
    if(confirm('Está seguro que desea eliminar a la mascota?')){
      this.mascotaArray=this.mascotaArray.filter(x=> x!=this.selectedMascota);
      this.selectedMascota=new Mascota();
    }
    
  }
  cargandoImagen(event){
    console.log(event);
  }
}
