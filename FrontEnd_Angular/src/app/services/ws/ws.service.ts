import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class WsService {

  url: string = 'http://localhost:8080/servidor/BackEnd-PHP-jwt/api/ingreso/';

  constructor(public http: Http, private authHttp: AuthHttp)
  {

  }

  /**
   * Metodo HTTP nativo
   * @param user 
   */
  get(user: Object)
  {
    return this.http.get(this.url, user)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }
post(data: Object)
  {
    return this.http.post(this.url, data)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }
  /**
   * Wrapper de HTTP que envia el token en la cabecera.
   * Para hacer peticines autenticado.
   * @param user 
   */
  getJwt(url, user: Object)
  {
    return this.authHttp.get(url, user)
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  private extractData(res: Response) {
    let body = res.json();    
    
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
   // console.error( errMsg );
    console.error( 'CATCH'+error );
    //return Observable.throw(errMsg);
  }
}
