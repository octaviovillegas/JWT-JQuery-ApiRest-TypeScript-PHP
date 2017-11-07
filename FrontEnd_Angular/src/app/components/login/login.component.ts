import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { WsService } from '../../services/ws/ws.service';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

export class User {
  public email: string = '';
  public clave: string = '';

  constructor( email: string, clave: string)
  {
    this.email = email;
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
  user: User = new User('','');
  url: string = 'http://localhost:8080/servidor/BackEnd-PHP-jwt/api/ingreso/';

  constructor( private router: Router, private ws: WsService) {
    this.user.email = '';
    // console.log(this.user);

  }

  ngOnInit() {
  }
  enviarBak()
  {
    console.log( this.user );
    this.ws.get( {'usuario':this.user} )
    .then( data => {
      console.log(data);
      if ( data.token )
      {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl("/pagina2");
      }
    })
    .catch( e => {
      console.log(e);
    } );
  }
   enviar()
  {

    var _correo="correo";
    var _clave="clave";
    console.log( _correo );
    this.ws.post( {
        data: {
          usuario: _correo,
          clave: _clave 
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
      console.log(e);
    } );
  }

}
