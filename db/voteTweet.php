<?php

$hostname = "";
$database = "";
$username = "";
$password = "";
$id = $_POST['id'];
$type = $_POST['type']; // Positive 1, Negative -1
$ip = $_SERVER['REMOTE_ADDR'];
// connect to the database
$conn = mysql_connect($hostname, $username, $password);
if (!$conn or !mysql_select_db($database, $conn))
    die('cannot connect to db');

$check = mysql_query("SELECT type FROM vote WHERE tweet_id = $id and email = '$ip';");
$info = mysql_fetch_array($check);
$value = $info['type'];

if ($value == "") {

    mysql_query("INSERT INTO vote VALUES ('$ip',$id,$type,now())");


    if ($type == 1) {

        mysql_query("UPDATE tweet SET positive_votes = (positive_votes+1) WHERE tweet_id = $id");
    } else {

        mysql_query("UPDATE tweet SET negative_votes = (negative_votes+1) WHERE tweet_id = $id");
    }
    $query = mysql_query("SELECT nick FROM tweet WHERE tweet_id = $id;");

    $row = mysql_fetch_array($query);
    $votes = $row['nick'];
}
echo $value;
echo mysql_error();
mysql_close($conn);
?>
