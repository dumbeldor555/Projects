<?php require APPROOT . '/views/inc/header.php'; ?>

<a href="<?php echo URLROOT ?>/posts" class="btn btn-light"><i class="fa fa-backward"></i> Back</a>
<br>
<h3><?php echo $data['post']->title; ?></h3>
<div class="bg-secondary text-white p-2 mb-3">
Written by <?php echo $data['user']->name; ?> on <?php echo $data['post']->created_at;?> 
</div>
<p> <?php echo $data['post']->body; ?> </p>

<?php if($data['user']->id == $_SESSION['user_id']): ?>
 <a href="<?php echo URLROOT ?>/posts/edit<?php echo '/'.$data['post']->id ?>" class="btn btn-dark">Edit</a>
 <a href="<?php echo URLROOT ?>/posts/confirmation <?php echo'/'.$data['post']->id ?>"  class="btn btn-danger pull-right">Delete</a>

<?php endif ?>
<?php require APPROOT . '/views/inc/footer.php'; ?>