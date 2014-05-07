<?php
@extract($_POST);
$name = stripslashes($name);
$phone = stripslashes($phone);
$email = stripslashes($email);
$church = stripslashes($church);
$question = stripslashes($question);
mail('info@mffc.org.au',"question from website","A message from $name ($church, $phone) has been received as follows: 

$question","From: $name <$email>");
?>
