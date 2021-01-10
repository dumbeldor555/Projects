

<?php

// this is core class it handles all url parameters

class Core {

protected $currentController = 'Pages';
protected $currentMethode = 'index';
protected $params = [];

public function __construct() {

$url = $this->get();
if(file_exists('../app/controller/'.ucwords($url[0]).'.php')){  
  $this->currentController = ucwords($url[0]);
  echo 'from line 18';

  // it destroys the variable passed in unset();
  unset($url[0]);
} 
require_once '../app/controller/'.  $this->currentController .'.php';

// instatiating an object 
$this->currentController = new $this->currentController;


// check for the second part of the url
if(isset($url[1])) {

 if(method_exists($this->currentController, $url[1])) {

$this->currentMethode = $url[1];
unset($url[1]);
 }
}


$this->params = $url ? array_values($url) : [];  
call_user_func_array([$this->currentController, $this->currentMethode], $this->params);

}

public function get() {
// check if the value of the url is set
if(isset($_GET['url'])) {

$url = rtrim($_GET['url'], '/');
$url = filter_var($url, FILTER_SANITIZE_URL);
$url = explode('/', $url);
return $url;
}
}


}
?>