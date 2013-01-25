<?php
$hostname = "";
$database = "";
$username = "";
$password = "";
$query = $_POST['query'];
$term = $query;
// connect to the database
$conn = mysql_connect($hostname, $username, $password);
if (!$conn or !mysql_select_db($database, $conn)) die('cannot connect to db');

  // get the submitted term and prepare it for the database query
    $term = mysql_real_escape_string(strip_tags(trim($term)));

    // check if the term has been submitted before
    if (mysql_result(mysql_query("SELECT COUNT(id) FROM search WHERE term = '$term'"), 0) > 0)
    {
        // the term exists - update the counter and the last search timestamp
        mysql_query("UPDATE search SET counter = counter+1, last_search = now() WHERE term = '$term'");
    } else {
        // the term does not exist - insert a new record
        mysql_query("INSERT INTO search (term, last_search) VALUES ('$term', now())");
    }
    echo $term;
    mysql_close($conn);
?>
