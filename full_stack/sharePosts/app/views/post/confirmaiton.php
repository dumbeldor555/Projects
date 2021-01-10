<?php require APPROOT . '/views/inc/header.php'; ?>
<p>Are you sure you want to delete it</p>
<!-- $data is post id in this page -->
<form action="<?php echo URLROOT; ?>/posts/delete<?php echo'/'.$data; ?>" method="post"> 
<input type="submit" name="button" value="yes" class="btn btn-danger">
<input type="submit" name="button" value="no" class="btn btn-danger pull-right">
</form> 
<?php require APPROOT . '/views/inc/footer.php'; ?>
