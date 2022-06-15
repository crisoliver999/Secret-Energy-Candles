<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $supplierEmail = "geral@secret-energy.pt";

    $header = "From: " . strip_tags($email) . "\r\n";
    $header .= "Reply-To: " . strip_tags($email) . "\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type:text/html;charset=UTF-8";

    $messageHtml = "<html>";
        $messageHtml .= "<head>";
            $messageHtml .= "<title>Nova mensagem</title>";
        $messageHtml .= "</head>";
        $messageHtml .= "<body>";
            $messageHtml .= $message;
        $messageHtml .= "</body>";
    $messageHtml .= "</html>";

    mail($supplierEmail, $subject, $messageHtml, $header);

    if(isset($_REQUEST["destination"])){
        header("Location: {$_REQUEST["destination"]}");
    }else if(isset($_SERVER["HTTP_REFERER"])){
        header("Location: {$_SERVER["HTTP_REFERER"]}");
    }else{
        header('Location: ./index.html');
    }
?>