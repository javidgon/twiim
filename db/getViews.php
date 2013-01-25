<?php

    $hostname = "";
    $database = "";
    $username = "";
    $password = "";
    $id = $_POST['id'];
    $conn = mysql_connect($hostname, $username, $password);
    if (!$conn or !mysql_select_db($database, $conn))
        die('cannot connect to db');

// prepare the tag cloud array for display
    $views = 0; // $maximum is the highest counter for a search term

    $query = mysql_query("SELECT views FROM user WHERE id = $id;");

    $row = mysql_fetch_array($query);
    $views = $row['views'];

    mysql_close($conn);

    echo $views;

?>
