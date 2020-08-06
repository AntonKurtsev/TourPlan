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
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
// Отображение результата
header('location: thankyou.html');
} 
elseif ($email = $_POST['email']) {
  $title = "Подписка на рассылку от Best Tour Plan";
  $body = "
  <h2>Новый запрос на подписку</h2>
  <b>E-mail:</b> $email
  ";

    header('location: thankyouforsubscribe.html');
}
elseif (($name = $_POST['feedback__name']) && ($phone = $_POST['feedback__phone']) && ($email = $_POST['feedback__email']) && ($message = $_POST['feedback__message'])) {
    $title = "Отзыв от попользователя Best Tour Plan";
    $body = "
    <h2>Новый отзыв</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>E-mail:</b> $email<br>
    <b>Сообщение:</b><br>$message
    ";
    // Отображение результата
    header('location: thankyouforfeedback.html');
    }
elseif (($name = $_POST['booking__name']) && ($phone = $_POST['booking__phone']) && ($email = $_POST['booking__email']) && ($message = $_POST['booking__message'])) {
    $title = "Бронирование от Best Tour Plan";
    $body = "
    <h2>Новый запрос на бронирование</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br>
    <b>E-mail:</b> $email<br>
    <b>Сообщение:</b><br>$message
    ";
    // Отображение результата
    header('location: thankyouforbooking.html');
}
  
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
      $mailSubscribe->addAddress('goncharovnikita713@gmail.com');  
  
  
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
  
      

