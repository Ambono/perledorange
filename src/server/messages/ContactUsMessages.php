<?php 
include_once("./Config.php");

   
$data = json_decode(file_get_contents("php://input"), true);
print_r("<br> start printing data: ". $data.'<br>');

 
$fname = mysqli_real_escape_string($conn, $data['fname']);
$lname = mysqli_real_escape_string($conn, $data['lname']);
$email = mysqli_real_escape_string($conn, $data['email']);
$number = mysqli_real_escape_string($conn, $data['number']);
$message = mysqli_real_escape_string($conn, $data['message']);

 echo "received this data: " . $fname .' '. $lname.' '.$number.' '.$email.' '.$message.'<br>'; 
          
$sql = "INSERT INTO contactmessages (FirstName, LastName, Email, Phone, Subject, Date) 
        VALUES (  '$fname', '$lname', '$email', '$number', '$message' , now())";
  
 echo "query created";
if ($conn->query($sql) === TRUE) {print_r('job done');}

         
     
        
    

