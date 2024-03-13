<?php
$firstName = strip_tags($_POST["firstName"]);
$lastName = strip_tags($_POST["lastName"]);
$email = strip_tags($_POST["email"]);
$msg = strip_tags($_POST["msg"]);

if($firstName != "" && $lastName!= "" && $email!= "" && $msg!= ""){
    mail('thomas.holderbaum@gmail.com', 'Sujet', $msg);
}
?>