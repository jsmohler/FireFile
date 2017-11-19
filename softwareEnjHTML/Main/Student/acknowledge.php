
<?php
	if(isset($_POST['send'])) 
	{

	}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Message</title>
		<script src="studentMessage.js">
		</script>
		<style>
			.navbar {
				overflow: hidden;
  				background-color: #8B2332;
			}
			.navbar a {
				display: inline-block;
				color: #8B6F4B;
				text-align: center;
				padding: 14px 16px;
				font-size: 20px;
			}
			.navbar a:hover {
				background-color: #8B6F4B;
				color: black;
			}
			.navbar a:active {
				background-color: #8B6F4B;
    			color: black;
			}
			.image {
				float: left;
				display: inline-block;
			}
		</style>
	</head>
	<body>
		<div class="image">
			<img src="../Images/tempicon.png">
		</div>
		<div class="navbar">
			<a href="studentHome.html">Home</a>
			<a href="studentContactInfo.html">Contact Info</a>
			<a class="active" href="studentMessage.html">Message Team</a>
			<a href="studentAccount.html">Account</a>
		</div>
		<h1>Thank you</h1>
        <p>Your message has been sent.</p>
        
        <h1>Oops!</h1>
        <p>Sorry, there was an error sending your message</p>
		</div>
	</body>
</html>