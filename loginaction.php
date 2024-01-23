<?php
// Replace these with your actual database credentials
$host = 'localhost';
$dbName = 'project';
$username = 'root';
$password = "";

// Establish a database connection
$connection = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);

// Retrieve username and password from the form
$uname = $_POST['uname'];
$pwd = $_POST['pwd'];

// Prepare and execute a query to check for matching credentials
$query = $connection->prepare("SELECT * FROM login1 WHERE uname = :uname AND pwd = :pwd");
$query->execute(array(':uname' => $uname, ':pwd' => $pwd));

// Check if a row with matching credentials exists
if ($query->rowCount() > 0) {
    // Valid credentials, redirect the user to another HTML file
    header("Location: index.html");
    exit();
} else {
    // Invalid credentials, display an alert box and redirect back to the form page
    echo '<script>alert("Invalid username or password."); window.location = "loginpage.html";</script>';
    exit();
}
?>
