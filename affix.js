function affix(element, top) {
  window.addEventListener('scroll', function() {
  	var scrollTop = window.scrollY;
  	if( scrollTop < top ){
  		element.classList.add('affix-top');
  		element.classList.remove('affix');
  	}
  	else
  	{
  		element.classList.remove('affix-top');
  		element.classList.add('affix');
  	}
  });
}
