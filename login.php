<?php
$c=mysqli_connect('localhost','root','','inventory');

if(isset($_POST['submit']) && !empty($_POST['username']) && !empty($_POST['username'])){
    
    $username=$_POST['username'];
    $password=$_POST['password'];
	
    $sql="SELECT username, password FROM users ";
    
    $result=mysqli_query($c,$sql);
	while($rows=mysqli_fetch_array($result)){
		if($rows['username']==$username && $rows["password"]==$password){
      header('Location:index.html');
		}else{
			echo "<script> alert('You Have Entered Incorrect Password');</script>";
		}
	}
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ShopNow - Login</title>
<link rel="stylesheet" href="./styles/login.css" /> 
</head>
<body>
<body>
	<div class="container">
	<img src="assets/log.jpg"/>
		<form method="POST" action="login.php">
			<div class="form-input">
				<input type="text" name="username" required placeholder="Username"/>	
			</div>
			<div class="form-input">
				<input type="password" name="password" required placeholder="Password"/>
			</div>
			<input type="submit" name="submit" value="LOGIN" class="btn-login"/>
		</form>
	</div>
</body>
</html>

































<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ShopNow - Login</title>
    <link rel="stylesheet" href="./styles/login.css" />
  </head>
  <body>
    <main class="container">
      <div class="headings">
        <h1 class="logo">ShopNow</h1>
        <h2 class="title">Login</h2>
      </div>
      <form action="">
        <div class="inputs">
          <div class="input">
            <label for="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div class="input">
            <label for="email">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </main>
  </body>
</html> -->
