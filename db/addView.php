<?php
$hostname = "";
$database = "";
$username = "";
$password = "";
$id = $_POST['id'];
$nick = $_POST['nick'];
$picture = $_POST['picture'];
// connect to the database
$conn = mysql_connect($hostname, $username, $password);
if (!$conn or !mysql_select_db($database, $conn)) die('cannot connect to db');

  // get the submitted term and prepare it for the database query
    $nick = mysql_real_escape_string(strip_tags(trim($nick)));

    // check if the term has been submitted before
    if (mysql_result(mysql_query("SELECT COUNT(id) FROM user WHERE id = $id"), 0) > 0)
    {
        // the term exists - update the counter and the last search timestamp
        mysql_query("UPDATE user SET views = views+1, last_view = now() WHERE id = $id");
    } else {
        // the term does not exist - insert a new record
        mysql_query("INSERT INTO user (id, nick, picture, views, last_view) VALUES ($id,'$nick','$picture', 1, now())");
    }
    echo $id;
    mysql_close($conn);
?>
