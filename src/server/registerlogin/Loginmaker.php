<?php

include_once("./Config.php");
// Create connection


$data = json_decode(file_get_contents("php://input"), true);

$myusername = mysqli_real_escape_string($conn, $data['email']);

$password = mysqli_real_escape_string($conn, $data['password']);

//echo 'Email: ' . $myusername.' Password:  '.$password. '<br>';

$sql = "SELECT Id FROM users WHERE Email ='$myusername'  and Password = '$password'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
       $data = $row[0] ;
   //   echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}

$count = mysqli_num_rows($result);

// If result matched $myusername and $mypassword, table row must be 1 row


function getUserIP() {
    $client = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote = $_SERVER['REMOTE_ADDR'];

    if (filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    return $ip;
}

$user_ip = getUserIP();


if ($count == 1) {
  
    $queryvisitors = "insert into sitevisits(visitor_session, Date, usertype, IPs) values('$myusername', now(),'registered','$user_ip')";
    $result_sessions = mysqli_query($conn, $queryvisitors);

    if (!$result_sessions) {
        die;
    } else {
       // echo' <br/> row inserted';
    }


    if ($myusername == 'admin') {
      //  header("location: ../index.php");
    } else {
       // echo "<br/> your user name is not an admin user name";
    }
}
print json_encode($data);
$conn->close();