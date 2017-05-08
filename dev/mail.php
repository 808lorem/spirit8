<?php

$recepient = "808lorem@gmail.com";
$sitename = "SPIRIT8";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$message = trim($_GET["message"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nEmail: $email \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");