<?php 

class Post {
  private $db;

  public function __construct() {
    $this->db = new Database();  
  }

  public function getPost() {
    
    $this->db->query("SELECT u.name, p.title, p.body, p.id as postId, p.user_id as UserpostId,u.created_at as userCreatedAt, p.created_at as postCreatedAt
                      FROM 
                      users as u
                      INNER JOIN
                      posts as p
                      ON u.id =  p.user_id
                      ORDER BY postCreatedAt DESC
                     ");  

    return $this->db->resultSet();
  }

  public function addPost($data) {
  
  $this->db->query("INSERT INTO posts (user_id, title, body) 
                    VALUES (:user_id, :title, :body)");

  $this->db->bind(':title', $data['title']);                  
  $this->db->bind(':body', $data['body']);                  
  $this->db->bind(':user_id', $data['user_id']);  
  
  if($this->db->execute()) {
    return true;
  } else {
    return false; 
  }

  }

  public function getPostById($id) {
    $this->db->query('SELECT * FROM posts WHERE id = :id');
    $this->db->bind(':id', $id);

    $row = $this->db->single();

    return $row;
  }

  public function editPost($title, $body, $postId) {

    $this->db->query('UPDATE posts SET title = :title, body = :body WHERE id = :postId');
    $this->db->bind(':title', $title);
    $this->db->bind(':body', $body);      
    $this->db->bind(':postId', $postId);
   
    $this->db->execute();
    }

    public function deletePost($id) {

      $this->db->query('DELETE FROM posts WHERE id = :postId');
      $this->db->bind(':postId', $id);

      $this->db->execute();
      
    }
}



?>