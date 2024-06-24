<?php

if (isset($_POST['enviar'])){

  if(!empty($_POST['name']) &&  !empty($_POST['msg']) && !empty($_POST['email'])){
    $name = $_POST['name'];
    
    $msg = $_POST['msg'];
    $email = $_POST['email'];
    $header = "From: josefrans703@gmail.com" . "\r\n";
    $header = "Reply-to: josefrans703@gmail.com" . "\r\n";
    $header = "X-Mailer: PHP/" . phpversion();

    $mail = mail($email,$msg,$header);
    if ($mail){
      echo "<h4>en viado exitosamente</h4>"
    }

  }
}

?>