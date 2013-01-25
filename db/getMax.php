<?php

function getMax() {

    $hostname = "";
    $database = "";
    $username = "";
    $password = "";

    $conn = mysql_connect($hostname, $username, $password);
    if (!$conn or !mysql_select_db($database, $conn))
        die('cannot connect to db');

// prepare the tag cloud array for display
    $maximum = 0; // $maximum is the highest counter for a search term

    $query = mysql_query("SELECT Max(counter) FROM search;");

    $row = mysql_fetch_array($query);
    $maximum = $row['Max(counter)'];

    echo mysql_error();

    mysql_close($conn);

    return $maximum;
}

?>
