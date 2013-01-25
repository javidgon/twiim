<?php

    $hostname = "";
    $database = "";
    $username = "";
    $password = "";
    $id = $_POST['id'];
    $positives = 0;
    $negatives = 0;
    $conn = mysql_connect($hostname, $username, $password);
    if (!$conn or !mysql_select_db($database, $conn))
        die('cannot connect to db');

    $query = mysql_query("SELECT positive_votes,negative_votes FROM tweet WHERE tweet_id = $id;");

    $row = mysql_fetch_array($query);

if($row){
    $positives = $row['positive_votes'];
    $negatives = $row['negative_votes'];
}
    mysql_close($conn);
    echo mysql_error();
    echo $positives.','.$negatives;


?>
