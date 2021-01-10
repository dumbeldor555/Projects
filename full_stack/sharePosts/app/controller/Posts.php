<?php 

class Posts extends Controller{


public function __construct() {

  if(!isLoggedIn()) {
    redirect('users/login');
  }

  $this->postModel = $this->model('post'); 
  $this->userModel = $this->model('user');
}

public function index() {
  
  $result = $this->postModel->getPost();     
  $data = [
    'posts' => $result 
  ]; 
  $this->view('Post/index', $data); 
}

public function add() {

  if($_SERVER['REQUEST_METHOD'] == 'POST') {

    // senetize input from submitted posts
    $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

    $data = [
      'title' => trim($_POST['title']),
      'body' => trim($_POST['body']),
      'user_id' => $_SESSION['user_id'],
      'title_err' => '',
      'body_err' => ''
    ];

    // check for title error
    if(empty($data['title'])) {
      $data['title_err'] = 'please enter the title';
    }
   // check for body error
   if(empty($data['body'])) {
     $data['body_err'] = 'please enter somthing in body';
   }

   // make sure errors are empty
   if(empty($data['title_err']) && empty($data['body_err'])) {
   // inserting posts into database
   if($this->postModel->addPost($data)) {
     // for some resong this input inside this funciton 'flash' is not working but the funciton is fine
    // flash('post_adsded','post Added');

    redirect('posts');
   } 
   } else {   
     
    $this->view('Post/add',$data);
   }
  } else {

    $data = [
      'title' => '',
      'body' => ''
    ];
   $this->view('Post/add',$data);
  }
   
}

public function show($id) {

   $post =  $this->postModel->getPostById($id);
   $user =  $this->userModel->getUserById($post->user_id);
   
  $data = [
    'post' => $post,
    'user' => $user
  ];
  $this->view('post/show', $data);
}

// edit posts 
public function edit($id) {
  
  if($_SERVER['REQUEST_METHOD'] == 'POST') {
  // senetize data
  $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
  $data = [
    'title' =>trim($_POST['title']),
    'body' => trim($_POST['body']),
    'title_err' => '',
    'body_err' => ''
  ];
 
 
  // check for title err
  if(empty($data['title'])) {
    $data['title_err'] = 'title cannot be empty';
  };
  // check for body err
  if(empty($data['body'])) {
    $data['body_err'] = 'body cannot be empty';
  };
  // make sure all errors are empty

  if(empty($data['title_err']) && empty($data['body_err'])) {
  // updating post in database
  $this->postModel->editPost($data['title'], $data['body'], $id); 
  $posts = $this->postModel->getPost();
   
  $data = [
   'posts' => $posts,
   'title' => $data['title'],
   'body' => $data['body']
  ];

  $this->view('Post/index', $data); 
  } else {
  
    $post = $this->postModel->getPostById($id);
     $data['id'] = $post->id;
    $this->view('Post/edit', $data);
  }

  } else {

    $post = $this->postModel->getPostById($id);
  
    if($post->user_id != $_SESSION['user_id']) {
      redirect('posts');
    } else {

      $data = [
        'id' => $post->id,
        'title' => $post->title,
        'body' => $post->body,
      ];  
      $this->view('Post/edit',$data); 
    }
    }
 
}

public function confirmation($id) {
   $post = $this->postModel->getPostById($id);
   if($post->user_id != $_SESSION['user_id']) {
      redirect('posts');
   } else {

    $this->view('post/confirmaiton', $id);
   }
}

public function delete($id) {

  $post = $this->postModel->getPostById($id);
  if($post->user_id != $_SESSION['user_id']) {  

  redirect('posts');
  } else{

    if($_SERVER['REQUEST_METHOD'] == 'POST') {

      $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
    
      if($_POST['button'] == 'yes') {
    
        $this->postModel->deletePost($id);
        $posts = $this->postModel->getPost(); 
        $data = [
          'posts' => $posts
        ];
      
        $this->view('post/index', $data); 
      } else {
    
        $post =  $this->postModel->getPostById($id);
        $user =  $this->userModel->getUserById($post->user_id);
        
       $data = [
         'post' => $post,
         'user' => $user
       ];
      // print_r($data);
       $this->view('post/show',$data);
      } 
    } else {
      // to be continue
      redirect('posts');
    }
  }  
}

}
?>