<?php  

function showWarning($msg, $id) {

echo $msg;
echo "<br>";
echo '<form action="posts/delte/"'.$id.'>';
echo '<input type="button" value="yes">';
echo '<input type="button" value="no">';
echo '</form>';

};
?>