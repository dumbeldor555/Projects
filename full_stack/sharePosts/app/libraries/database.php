<?php
// this is pdo database class 
// going to make prepare statement

class Database {

private $host = DB_HOST;
private $dbname = DB_NAME;
private $user = DB_USER;
private $password = DB_PASS;

private $dbh;
private $stmt;
private $error;

public function __construct() {
  
  $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname;
  
  // below arry will be passed when you create pdo instence  
  $option = array(
    
    PDO::ATTR_PERSISTENT => true,
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ); 
 
  // create pdo instance
  try{
       
    $this->dbh = new PDO($dsn, $this->user, $this->password, $option);
    
  } catch (PDOException $e) {

    $this->error = $e->getMessage(); 
    echo $this->error; 
  }

}

// this function takes a query 
public function query($sql) {

  $this->stmt = $this->dbh->prepare($sql);
  }
  
  public function bind($param, $value, $type = null) {

    if(is_null($type)) {
  
      switch(true) {
      
      case is_int($value):
          $type = PDO::PARAM_INT;
       break;
      case is_null($value):
         $type = PDO::PARAM_NULL;
       break;
      case is_bool($value):
        $type = PDO::PARAM_BOOL;
       break;  
      default :
        $type = PDO::PARAM_STR;
    }
    }
  
    $this->stmt->bindValue($param, $value, $type);
  }
  
  // execute prepare stament
  public function execute() {
  
  return $this->stmt->execute();
  }
  
  // getting result as an arry of objects
  public function single() {
  
    $this->execute();
    return $this->stmt->fetch(PDO::FETCH_OBJ);  
  }
  
  // getting result as object
  public function resultSet() {
  
    $this->execute();
    return $this->stmt->fetchAll(PDO::FETCH_OBJ);  
  }
  
  // get row count 
  public function rowCount() {
  
    return $this->stmt->rowCount();
  }
  
}