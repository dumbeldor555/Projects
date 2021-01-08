// getting playPause btn 
const btn = document.querySelector('.playBtn');
btn.addEventListener('click' , togglePlay);

// getting video itself
const video = document.querySelector('.myVideo');

function togglePlay() {

  const switchh = document.querySelector('.switch');
  // playing and pauseing video 
  if(!switchh.classList.contains('slide'))  {
    video.pause();
  } else{
    video.play();
  }
  switchh.classList.toggle('slide');
}

// showing pac-man before dom content loads
const preloader = document.querySelector('.preloader');
window.addEventListener('load', function() {

preloader.classList.add('hide-img');
})