function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



  function release() {
    var releases = document.querySelectorAll(".release");
  
    for (var i = 0; i < releases.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = releases[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        releases[i].classList.add("active");
      } else {
        releases[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", release);



//   function slide-right(){
//     var releases = document.querySelectorAll(".slide-right");
  
//     for (var i = 0; i < slide-rights.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = slide-rights[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         slide-rights[i].classList.add("active");
//       } else {
//         slide-rights[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", slide-right);