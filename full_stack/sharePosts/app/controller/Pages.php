<?php

class pages extends Controller{


public function __construct() {

}

public function index() {
  
  if(IsLoggedIn()) {

    redirect('posts');  
  }
  $data = ['title' => 'SharePosts',
          'discription' => 'Simple social network built on the TraversyMVC PHP framework'
        ];

  $this->view('pages/index', $data); 
}
public function about() {

  $data = ['title' => 'about',
  'discription' => 'App to share posts with other users'
    ];

  $this->view('pages/about', $data);
}

};

?>
