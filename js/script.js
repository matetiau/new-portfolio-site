window.onscroll = function() {
  if ( document.documentElement.scrollTop > 400) {
         document.getElementById("navbar").className = "roll-down";}
       else {
        document.getElementById("navbar").className = "roll-up";
      }
};

window.sr = ScrollReveal();
window.onscroll = function() {
    if (document.documentElement.scrollTop > 1000 ){
        document.getElementById('link-left').style.animation =' mymove 1.2s';
        document.getElementById('link-left').style.visibility='visible';
    }
}

sr.reveal('.item1', {duration: 1200 }, 320);











       