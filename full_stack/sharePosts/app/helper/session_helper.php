<?php 

// did not understand this funcito quite well
session_start();
function flash($name = '', $messege = '', $class = 'alert alert-success') {

if(!empty($name)) {

if(!empty($messege) && empty($_SESSION[$name])) {
if(!empty($_SESSION[$name])) {
  unset($_SESSION[$name]);   
} 
  
if(!empty($_SESSION[$name.'_class'])) {
  unset($_SESSION[$name.'_class']);  
}

$_SESSION[$name] = $messege;
$_SESSION[$name. '_class'] = $class;

} elseif(!empty($_SESSION[$name]) && empty($messege)) {

  $class = !empty($_SESSION[$name.'_class']) ? $_SESSION[$name.'_class'] : '';

echo '<div class="'.$class.'" id="msg-flash"> "'.$_SESSION[$name].'" </div>';
unset($_SESSION[$name]);
unset($_SESSION[$name.'_class']);
}
}
}

// check if the users is logged in or not 
function isLoggedIn() {

  if(isset($_SESSION['user_id'])) {

    return true;
  } else {
    return false;
  }
}
?>