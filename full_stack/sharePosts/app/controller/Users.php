<?php 

class Users extends Controller {

  public function __construct() { 

   $this->userModel = $this->model('user');
  }


  ///////////////////// register funciton ///////////////////
  public function register() { 
    if($_SERVER['REQUEST_METHOD'] === 'POST') {  
  
// Sanitize POST data
      $_POST = filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);
// Init data  
      $data = [
        'name' => trim($_POST['name']),
        'email' => trim($_POST['email']),
        'password' => trim($_POST['password']),
        'confirm_password' => trim($_POST['confirm_password']),
        'name_err' => '',
        'email_err' => '',
        'password_err' => '',
        'confirm_password_err' => '',
      ];


    // Validate Email
     if(empty($data['email'])) {

      $data['email_err'] = 'Please Enter Your email';
     } elseif($this->userModel->findUserByEmail($data['email'])) {

      $data['email_err'] = 'email is alredy taken';
     }
     // Validate Name
     if(empty($data['name'])) {

      $data['name_err'] = 'Please Enter Your name';
     }
     // Validate Password
     if(empty($data['password'])) {

      $data['password_err'] = 'Please Enter Your password';
     } elseif(strlen($data['password']) < 6) {
       $data['password_err'] = "password must contains atleast 6 charechter";
     }

     // Validate Confirm Password
     if(empty($data['confirm_password'])) {
  
      $data['confirm_password_err'] = 'Please confirm your password';
     } elseif ($data['confirm_password'] !== $data['password']) {

      $data['password_err'] = "password do not match";
      $data['confirm_password_err'] = "password do not match";
     }
     
     // Make sure errors are empty 
     if(empty($data['name_err']) && empty($data['email_err']) && 
     empty($data['password_err']) && empty($data['confirm_password_err'])) {
     
      // hash password 
      $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
      if($this->userModel->register($data)) {
        flash('register_success', 'you can log in now');  
        // header('location:' .URLROOT. '/users/login');  
        redirect('users/login');
      } else { 
        die('somthing went wrong');
      }
     } else {

      $this->view('users/register', $data); 
     }


    } else {
     
      $data = [
        'name' => '',
        'email' => '',
        'password' => '',
        'confirm_password' => '',
        'name_err' => '',
        'email_err' => '',
        'password_err' => '',
        'confirm_password_err' => '',
        
      ];

      $this->view('users/register', $data); 
    }
  } 
  
//////////////// login funciton  /////////////////////
  public function login() { 
     if($_SERVER['REQUEST_METHOD'] == 'POST') {

      $_POST =filter_input_array(INPUT_POST, FILTER_SANITIZE_STRING);

      //init data
      $data = [
        'email' => trim($_POST['email']),
        'password' => trim($_POST['password']),
        'email_err' => '',
        'password_err' => '',      
       ];

      // validate email
      if($this->userModel->findUserByEmail($data['email'])) {
      
        // user found
      } elseif(!$this->userModel->findUserByEmail($data['email'])) {

        $data['email_err'] = 'no user found';
      }  

      // validate password  
      if(empty($data['password'])) {
        $data['password_err'] = 'Please Enter Your password';
      } elseif(strlen($data['password']) < 6) {
        $data['password_err'] = "password must contains atleast 6 charechter";
      }

      // make sure errors are empty
      if(empty($data['email_err']) && empty($data['password_err'])) {

      $loggedinUser = $this->userModel->login($data['email'], $data['password']);

      if($loggedinUser) {

      $this->createUserSession($loggedinUser);
      } else {  
        // password did not match;
        $data['password_err'] = 'password is incorrect';
        $this->view('Users/login', $data);   
      }

      }  else {

        $this->view('Users/login', $data);
      }

     } else {

      $data = [

        'email' => '',
        'password' => '',
        'password_err' => '',
        'email_err' => '',
      ];
      $this->view('users/login', $data);
     }
  }

  /////////////// session funciton /////////////////
  public function createUserSession($user) {

    $_SESSION['user_id'] = $user->id;
    $_SESSION['email'] = $user->email;
    $_SESSION['name'] = $user->name;

    redirect('posts');  
  }

  //////////////////////// log out funciton ////////////////////////////
  public function logOut() {
    unset($_SESSION['user_id']);
    unset($_SESSION['email']);
    unset($_SESSION['name']);

    session_destroy();
    redirect('users/login'); 
  }



}
?>