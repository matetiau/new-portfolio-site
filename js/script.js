window.onscroll = function() {
    /*navbar animation*/
    if ( document.documentElement.scrollTop > 400) {
         document.getElementById("navbar").className = "roll-down";}
       else {
        document.getElementById("navbar").className = "roll-up";
      }
    
    
    
    /*portfolio animation*/
    if (document.documentElement.scrollTop > 900 ){
        document.getElementById('link-left').style.animation =' mymove 1s';
        document.getElementById('link-left').style.visibility='visible';
        
        
        document.getElementById('link-right').style.animation =' mymoveleft 1s';
        document.getElementById('link-right').style.visibility='visible';
        
        
        document.getElementById('link-center').style.animation =' mymovecenter 1s';
        document.getElementById('link-center').style.visibility='visible';
        
        
    }
}

/*skills animation*/
window.sr = ScrollReveal();
sr.reveal('.item1', {duration: 1200 }, 320);











       