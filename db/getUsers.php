<?php

function getUsers() {

    $hostname = "";
    $database = "";
    $username = "";
    $password = "";

    $conn = mysql_connect($hostname, $username, $password);
    if (!$conn or !mysql_select_db($database, $conn))
        die('cannot connect to db');

// prepare the tag cloud array for display
    $users = array(); // create empty array

    $query = mysql_query("SELECT picture, nick FROM user ORDER BY views DESC LIMIT 38");

    while ($row = mysql_fetch_array($query)) {

            $picture = $row['picture'];
            $nick = $row['nick'];

            $users[] = array('picture' => $picture, 'nick' => $nick);
        
    }

// shuffle terms unless you want to retain the order of highest to lowest
    mysql_close($conn);

    shuffle($users);

    return $users;
}

?>
