<?php
// requirening config files
require_once 'config/config.php';
// requring url_helper funciton
require_once 'helper/url_helper.php';
// requreing flash funciton
require_once 'helper/session_helper.php';
// requiring message_helper functions
require 'helper/messages_helper.php';

// requirenig libraries // find out more about spl_autoload_register funciton// it will automatically include file when the respective class is instatiated or extended
spl_autoload_register(function($className) {

  require_once 'libraries/'.$className. '.php';
});

// the above code does the same thing but efficiently.
// require_once 'libraries/core.php';
// require_once 'libraries/controller.php';
// require_once 'libraries/database.php';
// require_once 'model/Post.php';

?>