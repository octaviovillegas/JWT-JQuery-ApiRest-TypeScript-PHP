<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require '../composer/vendor/autoload.php';
require_once '/clases/AccesoDatos.php';
require_once '/clases/cdApi.php';
require_once '/clases/AutentificadorJWT.php';
require_once '/clases/MWparaCORS.php';
require_once '/clases/MWparaAutentificar.php';
require_once '/clases/usuario.php';
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*

¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

$app = new \Slim\App(["settings" => $config]);



/*LLAMADA A METODOS DE INSTANCIA DE UNA CLASE*/
$app->post('/ingreso/', function (Request $request, Response $response) {    
    
	$token="";
  $ArrayDeParametros = $request->getParsedBody()['datosLogin'];
  $usuario = $ArrayDeParametros['usuario'];
  $clave = $ArrayDeParametros['clave'];

 // var_dump($ArrayDeParametros );
  if( $usuario &&  $clave )
  {

      if( usuario::esValido($usuario,$clave))
      {
        $datos=array('usuario'=>$usuario,'clave'=>$clave);
        $token= AutentificadorJWT::CrearToken($datos);
        $retorno=array('datos'=> $datos, 'token'=>$token );
        $newResponse = $response->withJson( $retorno ,200); 
      }
      else
      {
        $retorno=array('error'=> "no es usuario valido" );
        $newResponse = $response->withJson( $retorno ,409); 
      }
  }else
  {
        $retorno=array('error'=> "Faltan los datos del usuario y su clave" );
        $newResponse = $response->withJson( $retorno  ,411); 

  }
 
	return $newResponse;
});

$app->get('/ingreso/', function (Request $request, Response $response,$arg) {    
    
  $token="";

  $datos=$request->getParam();
  if(isset( $arg['usuario']) && isset( $arg['clave']) )
  {
      $usuario=$ArrayDeParametros['usuario'];
      $clave= $ArrayDeParametros['clave'];

      if(usuario::esValido($usuario,$clave))
      {
        $datos=array('usuario'=>$usuario,'clave'=>$clave);
        $token= AutentificadorJWT::CrearToken($datos);
        $retorno=array('datos'=> $datos, 'token'=>$token );
        $newResponse = $response->withJson( $retorno ,200); 
      }
      else
      {
        $retorno=array('error'=> "no es usuario valido" );
        $newResponse = $response->withJson( $retorno ,409); 
      }
  }else
  {
        $retorno=array('error'=> "Faltan los datos del usuario y su clave" );
        $newResponse = $response->withJson( $datos  ,411); 
  }
 
  return $newResponse;
});



$app->get('/tomarToken[/]', function (Request $request, Response $response) {    
    
	

    $arrayConToken = $request->getHeader('miTokenUTNFRA');
    $token=$arrayConToken[0];

    try {

      AutentificadorJWT::VerificarToken($token);
      $response->getBody()->write(" PHP :Su token es ".$token);  
      $respuesta=usuario::Traertodos();    
      $newResponse = $response->withJson($respuesta); 

    } catch (Exception $e) {

      $textoError="error ".$e->getMessage();
      $error = array('tipo' => 'acceso','descripcion' => $textoError);
      $newResponse = $response->withJson( $error , 403); 

    }
    
    return $newResponse;


});

$app->run();