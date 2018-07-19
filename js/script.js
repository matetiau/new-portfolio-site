window.onscroll = function() {
  if ( document.documentElement.scrollTop > 400) {
         document.getElementById("navbar").className = "roll-down";}
       else {
        document.getElementById("navbar").className = "roll-up";
      }
   
};

{
window.sr = ScrollReveal();

sr.reveal('.mee', { duration: 3000 });
sr.reveal('.aboutme', { duration: 5000 });
sr.reveal('.photoOff', { duration: 7000 });
sr.reveal('.item1', {duration: 1200 }, 320);
sr.reveal('.project-tile', {duration: 1500 }, 350);
}


function koko() {
    document.getElementById('linkaa').style.backgroundColor = "#F7C502";
    document.getElementById('linkaa').style.color = "aliceblue";
}
    




       