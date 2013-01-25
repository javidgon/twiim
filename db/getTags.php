<?php

function getTags() {

    $hostname = "";
    $database = "";
    $username = "";
    $password = "";

    $conn = mysql_connect($hostname, $username, $password);
    if (!$conn or !mysql_select_db($database, $conn))
        die('cannot connect to db');

// prepare the tag cloud array for display
    $terms = array(); // create empty array

    $query = mysql_query("SELECT term, counter FROM search ORDER BY counter DESC LIMIT 20");

    while ($row = mysql_fetch_array($query)) {

        if (strlen($row['term']) < 20) {
            $term = $row['term'];
            $counter = $row['counter'];

            $terms[] = array('term' => $term, 'counter' => $counter);
        }
    }

// shuffle terms unless you want to retain the order of highest to lowest
    mysql_close($conn);

    shuffle($terms);

    return $terms;
}

?>
