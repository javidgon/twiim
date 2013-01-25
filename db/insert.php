<?php

$hostname = "";
$database = "";
$username = "";
$password = "";

$tweet_id = $_POST['tweet_id'];
$summary = $_POST['summary'];
$nick = $_POST['nick'];
$user_id = $_POST['user_id'];
$image = $_POST['image'];
$uri = $_POST['uri'];
$created_at = $_POST['created_at'];
echo $created_at;
// connect to the database
$conn = mysql_connect($hostname, $username, $password);
if (!$conn or !mysql_select_db($database, $conn))
    die('cannot connect to db');

// See if it exists or not.

$exist = mysql_query("SELECT * FROM tweet WHERE tweet_id = $tweet_id;");

if(mysql_affected_rows() == 0){
	
	$result = mysql_query("INSERT INTO tweet values($tweet_id, '$summary','$nick',$user_id,'$image','$uri',0,0,'$created_at',now())", $conn);
	echo 'Insertado, valor: '.$summary;
	
}else{
		echo 'Ya existía.';
	
}
mysql_close($conn);	

?>

