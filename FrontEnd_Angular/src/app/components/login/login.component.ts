import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

export class Usuario {
  public correo: string = '';
  public clave: string = '';

  constructor( correo: string, clave: string)
  {
    this.correo = correo;
    this.clave = clave;
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // public form:FormGroup;
  // public email:AbstractControl;
  // public password:AbstractControl;
  // public submitted:boolean = false;
  unUsuario: Usuario = new Usuario('','');
  url: string = 'http://localhost:8080/servidor/BackEnd-PHP-jwt/api/ingreso/';

  constructor( private router: Router, private ws: WsService) {
    this.unUsuario.correo = 'algo';
    this.unUsuario.clave = 'algo';
    console.log(this.unUsuario);

  }

  ngOnInit() {
  }
 
   enviar()
  {

    //console.info(this.unUsuario);
  
    this.ws.post( {
        datosLogin: {
          usuario: this.unUsuario.correo,
          clave: this.unUsuario.clave 
      }} )
    .then( data => {
      console.info("data>>>",data);
      if ( data.token )
      {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl("/pagina2");
      }
    })
    .catch( e => {
      console.info(e);
    } );
  }

}
