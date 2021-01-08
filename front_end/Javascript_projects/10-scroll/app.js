const Selectors = {

   container : document.querySelector('#container'),
   containerStyle : this.getComputedStyle(this.container, null).height,
   containerHeight : undefined, 
   heightWithoutPx : undefined, 
   fixed : document.querySelector('.fixed'), 
   link : document.querySelectorAll('.link'),
   arrow : document.querySelector('.fa-arrow-up'),
   btnContainer: document.querySelector('.BtnContainer') 
};

Selectors.containerHeight = Selectors.containerStyle;
Selectors.heightWithoutPx = Selectors.containerHeight.slice(0, -2);

//making navbar background white when scrolled
window.addEventListener('scroll' , function() {

  const scrolled  =  window.pageYOffset;
  if(scrolled > Selectors.heightWithoutPx/2) {

  Selectors.fixed.style.background = 'var(--clr-white)';  
  Selectors.fixed.style.color = 'var(--clr-black)';
  Selectors.fixed.style['boxShadow'] = 'var(--dark-shadow)';
  Selectors.btnContainer.style.height = '40px';
  Selectors.btnContainer.style.width = '40px';
  Selectors.arrow.style.display = 'block';
  for(let i = 0; i < Selectors.link.length; i++) {
    Selectors.link[i].style.color = 'var(--clr-black)';
  }
  } else {

  Selectors.fixed.style.background = 'transparent';
  Selectors.fixed.style.color = 'var(--clr-white)';
  Selectors.fixed.style['boxShadow'] = 'none'; 
  Selectors.arrow.style.display = 'none';
  Selectors.btnContainer.style.height = 0;
  Selectors.btnContainer.style.width = 0;
  for(let i = 0; i < Selectors.link.length; i++) {

    Selectors.link[i].style.color = 'var(--clr-white)';
  }
  }
});

// scrolling top when arrow is clicked
const btnContainer = document.querySelector('.BtnContainer');
btnContainer.addEventListener('click', function() {
   
  window.scrollBy({
    top: -window.pageYOffset,
    behavior:'smooth'
  });
})


