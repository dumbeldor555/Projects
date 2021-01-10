<?php

class Controller {

//load model
public function model($model){
//require model files

require_once '../app/model/'. $model .'.php';

//instatiate model 
return new $model();  
}
// '../app/controller/'.ucwords($url[0]).'.php'
//load veiw
public function view($view, $data = []) {          

//check for veiw files 
if(file_exists('../app/views/'.$view.'.php')) {
  
  require_once '../app/views/'.$view.'.php';
  
} else {

  die('view does not exist');
}
}

}

?>