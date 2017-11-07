import { Component, OnInit } from '@angular/core';
import { WsService } from '../../services/ws/ws.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  constructor(private ws: WsService)
  {
    this.ws.getJwt('http://localhost:8080/servidor/BackEnd-PHP-jwt/api/tomarToken/', {})
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  ngOnInit() {
  }

}
