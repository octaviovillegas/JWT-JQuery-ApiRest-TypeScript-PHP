import { Component, OnInit } from '@angular/core';
import { AutService } from '../../services/auth/aut.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

usuario:any;

  constructor(private autenticador: AutService) {

  this.usuario=this.autenticador.getData().data;
   }

  ngOnInit() {
	  console.info("ngOnInit el token",this.autenticador.getData());
	  console.info("ngOnInit la data",this.autenticador.getData().data);
  }

}
