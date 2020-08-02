<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
if (($name = $_POST['name']) && ($phone = $_POST['phone']) && ($message = $_POST['message'])) {
  # code...// Формирование самого письма
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'besttourplandrk@gmail.com'; // Логин на почте
    $mail->Password   = '9`]q]H?N'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('besttourplandrk@gmail.com', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('kucrev@gmail.com');  


    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');
} 
else if ($email = $_POST['email']) {
  $title = "Подписка на рассылку от Best Tour Plan";
  $body = "
  <h2>Новое письмо</h2>
  <b>E-mail:</b> $email
  ";

// Настройки PHPMailer
$mailSubscribe = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mailSubscribe->isSMTP();   
    $mailSubscribe->CharSet = "UTF-8";
    $mailSubscribe->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mailSubscribe->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mailSubscribe->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mailSubscribe->Username   = 'besttourplandrk@gmail.com'; // Логин на почте
    $mailSubscribe->Password   = '9`]q]H?N'; // Пароль на почте
    $mailSubscribe->SMTPSecure = 'ssl';
    $mailSubscribe->Port       = 465;
    $mailSubscribe->setFrom('besttourplandrk@gmail.com', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mailSubscribe->addAddress('kucrev@gmail.com');  


    // Отправка сообщения
    $mailSubscribe->isHTML(true);
    $mailSubscribe->Subject = $title;
    $mailSubscribe->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mailSubscribe->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mailSubscribe->ErrorInfo}";
    }

    // Отображение результата
    header('location: thankyouforsubscribe.html');
}