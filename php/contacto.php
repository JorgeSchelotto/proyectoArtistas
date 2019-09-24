<?php
if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['subject']))
$subject = 'Página Guada Gárriz';
$message = 'Deseo que me avisen cuando este lista la página.'

$content="From: $name \n Email: $email \n Message: $message";
$recipient = "gabrielavictoriaw@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
header ("Location: http://guadagarriz.com.ar");
?>