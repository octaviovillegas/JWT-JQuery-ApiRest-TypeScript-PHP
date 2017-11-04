<?php
class usuario
{
	 public static function esValido($usuario, $clave) {
      

       if($usuario=="admin@admin.com" && $clave=="1234")
       {
         return true;
       }
       else
       {
          return false;

       }
      
    }
    public static function TraerTodos() {
      
	    $uno= new stdClass();
	    $uno->nombre="jose";
	    $uno->apellido="perez";
	    $dos= new stdClass();
	    $dos->nombre="maria";
	    $dos->apellido="sosa";
	    $tres= new stdClass();
	    $tres->nombre="pablo";
	    $tres->apellido="agua";

	    $retorno=array($uno,$dos,$tres);

     	return $retorno;
      
    }

}