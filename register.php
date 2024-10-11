<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";  // Make sure this matches the database name exactly
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
/*$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}*/

/*$sql = "INSERT INTO user (username,email,phone,password)
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  $last_id = $conn->insert_id;
  echo "New record created successfully. Last inserted ID is: " . $last_id;
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();*/
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        register
    </title>
    <link rel="stylesheet" href="register.css">
</head>
<body>
    
<form action="" method="post">
    
      <div class="container">
        <div class="box form-box">
          <header id="header">Login</header>
          <form action="" method="post">
            <div class="field-input">
              <label>Username</label>
              <input type="text" name="username" id="username"  placeholder="Username"  required>
            </div>

            <div class="field-input">
              <label>email</label>
              <input type="email" name="email" id="email"  placeholder="email" required>
            </div>

            
            <div class="field-input">
              <label>phone</label>
              <input type="number" name="phone" id="phone"  placeholder="phone" required>
            </div>

            <div class="field-input">
              <label>password</label>
              <input type="text" name="Password" id="password"  placeholder="password" required>
            </div>

            <div class="field">
              
              <input type="submit" name="submit"  value="login" id="btn1">
            </div>

        
          <div class="back">
            <a href="account.php">Next</a>
          </div>
            

          </form>

        </div>
      
      </div>
    </form>
    <br>
      

</body>
</html>