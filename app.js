
    const section = document.querySelectorAll("section");
    const sections = {};
    let i = 0;
  
    section.forEach
    section.forEach(function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {

    const scrollPosition = scrollY
    for (i in sections) {
        if (sections[i] *0.85 <= scrollPosition) {
          console.log(sections[i] /2, scrollPosition);
            document.querySelector('.active').setAttribute('class', ' ');
           document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
      }
    };


    let header = document.querySelector("header");
    let lastScrollValue = 0;
    
    document.addEventListener('scroll',() => {
        let top  = document.documentElement.scrollTop;
        if(lastScrollValue < top) {
          header.classList.add("hidden");
        } else if(top == 0) {
          header.classList.remove("hidden");
        }
        lastScrollValue = top;
    });