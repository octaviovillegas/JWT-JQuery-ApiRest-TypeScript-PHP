import { Component, OnInit } from '@angular/core';
import { WsService } from '../../services/ws/ws.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {
 
listado:any;
 constructor(private ws: WsService)
  {
    
  }

  ngOnInit() {
  }

  traerTodos()
  {
  	//alert("traerTodos");
	  this.ws.getJwt('http://localhost:8080/servidor/BackEnd-PHP-jwt/api/tomarToken/', {})
	    .then(data => {
	      console.info("then",data);
	      this.listado=data;
	    })
	    .catch(e => {
	      console.info("error",e);
	    });

  }
}
