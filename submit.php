<?php

    $name = $_POST['name'];
    $address = $_POST['morada'];
    $postcode = $_POST['cp'];
    $email = $_POST['email'];
    $order = $_POST['order'];
    $subtotal = $_POST['subtotal'];
    $shipping = $_POST['shipping'];
    $total = $_POST['total'];

    $supplierEmail = "geral@secret-energy.pt";
    
    $orderNumb = rand(0, 9999);
    
    $orderData = printOrder($order);

    $headerCustomer = "From: " . strip_tags($supplierEmail) . "\r\n";
    $headerCustomer .= "Reply-To: ". strip_tags($supplierEmail) . "\r\n";
    $headerCustomer .= "MIME-Version: 1.0\r\n";
    $headerCustomer .= "Content-type:text/html;charset=UTF-8";
    
    $headerSupplier = "From: " . strip_tags($supplierEmail) . "\r\n";
    $headerSupplier .= "Reply-To: ". strip_tags($email) . "\r\n";
    $headerSupplier .= "MIME-Version: 1.0\r\n";
    $headerSupplier .= "Content-type:text/html;charset=UTF-8";

    $subjectCustomer = "Obrigada pela sua encomenda";
    $supplierSubject = "Nova encomenda!";

    $messageCustomer = "<html>";
        $messageCustomer.="<head>";
            $messageCustomer.="<title>Obrigada pela sua encomenda</title>";
        $messageCustomer.="</head>";
        $messageCustomer.="<body>";
            $messageCustomer .="<p>Olá $name, obrigada pela sua preferência.</p>";
            $messageCustomer .="<p>Confirmamos a recepção da sua encomenda à qual foi atribuido o código $orderNumb, será processada, logo que seja recebido o comprovativo de pagamento.</p>";
            $messageCustomer.="<p>Em baixo toda a informação da sua encomenda:<br/></p>";
            $messageCustomer .="<p>Pague a sua encomenda através de transferência bancária para o seguinte nib: PT50 0045 3116 4032049663345.<br/>Ou por MBway através do número: 917980692.";
            $messageCustomer .="<p>Após o pagamento, envie-nos o comprovativo para o e-mail secretenergycandle@gmail.com com o assunto “Comprovativo de pagamento da encomenda $orderNumb ”.</p>";
            $messageCustomer.= "<p>Onde vai recebe a encomenda:<br/>Entrega na morada ( via CTT)<br/>$name<br/>$address<br/>$postcode<br/></p>";
            $messageCustomer .= "<p>Dados de faturação<br/>$name<br/>$address<br/>$postcode<br/>$email</p>";
            $messageCustomer .= "<p>Itens da encomenda<br/><br/>$orderData<br/></p>";
            $messageCustomer .= "<p>Sub-total: $subtotal €<br/>Portes de envio: $shipping €<br/>Total: $total €</p>";
        $messageCustomer .= "</body>";
    $messageCustomer .="</html>";


    $messageSupplier = "<html>";
        $messageSupplier .= "<head>";
            $messageSupplier .= "<title>Nova encomenda</title>";
        $messageSupplier .= "</head>";
        $messageSupplier .= "<body>";
            $messageSupplier .= "<p>Ordem numero: $orderNumb<br/></p>";
            $messageSupplier .= "<p>Dados Cliente<br/>$name<br/>$address<br/>$postcode<br/>$email<br/></p>";
            $messageSupplier .= "<p>Itens da encomenda<br/>$orderData<br/></p>";
            $messageSupplier .= "<p>Sub-total: $subtotal €<br/>Portes de envio: $shipping €<br/>Total: $total €<br/></p>";
        $messageSupplier .= "</body>";
    $messageSupplier .= "</html>";

    // email to customer
    mail($email, $subjectCustomer, $messageCustomer, $headerCustomer);

    // email to supplier
    mail($supplierEmail, $supplierSubject, $messageSupplier, $headerSupplier);

    // redirect to homepage
    header('Location: https://www.secret-energy.pt');

    // functions
    function printOrder($order){
        $products = [];
        $orderDetails = "";

        $token = strtok($order, "&");

        while ($token !== false) {
            array_push($products, $token);
            $token = strtok("&");
        }
    
        for ($i = 0; $i < sizeof($products); $i++) {
            $token = strtok($products[$i], "/");
            $orderDetails .= $token;
            $orderDetails .= "<br/>";
            while ($token !== false) {
                $token = strtok("/");
                $orderDetails .= $token;
                $orderDetails .= "<br/>";
            }
        };
    return $orderDetails;
    }
?>