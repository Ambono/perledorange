<?php 
include_once("./Config.php");
// Create connection

$_SESSION['token_temp_user'] = session_id();
 
$data = json_decode(file_get_contents("php://input"), true);
print_r("<br> start printing data: ". $data.'<br>');

 
$fname = mysqli_real_escape_string($conn, $data['fname']);
$lname = mysqli_real_escape_string($conn, $data['lname']);
$email = mysqli_real_escape_string($conn, $data['email']);
$number = mysqli_real_escape_string($conn, $data['number']);
$password = mysqli_real_escape_string($conn, $data['password']);

 echo "received this data: " . $fname .' '. $lname.' '.$number.' '.$email.' '.$password.'<br>'; 
 
    
$sql = "INSERT INTO users(FirstName, LastName, Email, PhoneNumber, Password, SecretQuestion, SecretAnswer, Date) 
        VALUES (  '$fname', '$lname', '$email', '$number', '$password' ,'do you like perledorange', 'I like perledorange', now())";
  
 echo "query created";
if ($conn->query($sql) === TRUE) {
    print_r('job done');
         }else {
            echo "Message could not be sent...";
         }
     


//print json_encode($data);
//$connect->close();