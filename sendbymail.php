<?php

$destino = "sercar88@gmail.com";
$asunto = "Contacto desde Sugarssand web";
$remitente = $_POST['mail'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$texto = $_POST['mensaje'];
$mensaje = "Detalles del formulario de contacto:

Nombre:   ".$nombre."\r\n"."
Telefono: ".$telefono."\r\n"."  
E-mail:   ".$remitente."\r\n"."
Mensaje:  ".$texto."\r\n

";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$remitente."\r\n".
'Reply-To:'.$remitente."\r\n".
'X-Mailer: PHP/'.phpversion();
@mail($destino, $asunto, $mensaje, $headers);

 echo '<SCRIPT type="text/javascript"> alert("Se envio su mensaje!");
        window.location.replace("../contacto.html");	
    </SCRIPT>';
?>