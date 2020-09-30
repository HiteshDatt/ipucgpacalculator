$(document).ready(function(){
    $(".smoothScroll").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });

  /* go to top button*/
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    mybutton = document.getElementById("gototop");

    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      mybutton.style.opacity = "1";
    } else {
      mybutton.style.opacity = "0";
    }
  }