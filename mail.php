<?php 
 
ini_set('display_errors',0); 
$result = []; 

if (empty($result['error_form'])) { 
 
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $message = $_POST['message']; 
    $phone = $_POST['phone']; 
    $to = '1lerkag@gmail.com'; 
    $subject = 'Сайт новое сообщение'; 
 
    $body = "От кого: $name\nE-Mail: $email\nТелефон: $phone\nСообщение:\n$message"; 
 
    if (mail ($to, $subject, $body)) { 
        $result['success']="$name, cообщение было отправлено.Мы скоро с вами свяжемся."; 
    } else { 
        $result['error_mail']='Ошибка в сообщении. Попробуйте позже'; 
    } 
} 
 
header('Content-type: application/json');
echo json_encode($result); 