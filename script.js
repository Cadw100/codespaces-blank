// Intro
let  left = document.querySelector('.left');
let right = document.querySelector('.right');
let leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let shotgun = document.querySelector('.shotgun');
let injury = document.querySelector('.injury');
let monkey = document.querySelector('.monkey');
let gs = document.querySelector('.gs');
let oblock = document.querySelector('.oblock');
let monkeyE = document.querySelector('.monkeyE');
let pg = document.querySelector('.pg');
let find = document.querySelector('.find'); 
let protect = document.querySelector('.protect');
let run = document.querySelector('.run');
shotgun.style.display="none"; 
injury.style.display="none";
gs.style.display="none";
oblock.style.display="none";
monkey.style.display="none";
pg.style.display="none";
find.style.display="none";
protect.style.display="none";
run.style.display="none";


// Left button crodie

left.addEventListener('click', function() {
    console.log("clicked left");
 leftRight.style.display ="none"; 
 left.style.display ="none";
right.style.display ="none";
find.style.display="block";
monkey.style.display="none";
gs.style.display="none";

text.innerHTML="You find a shotgun in a alley, Double click to play with it up";

});

// double click the shotgun

find.addEventListener('dblclick', function(){
    console.log("shotgun dbl clicked")
    shotgun.style.display="none";
   injury.style.display= "none";
   gs.style.display= "none";
   find.style.display="none";

   injury.style.display="block";
   text.innerHTML ="OUCH";
   text.innerHTML="You shoot a random by accident, what do you do?"; 

}); 



// Right Button Crodie


    right.addEventListener('click', function(){
        console.log("right clicked")
        leftRight.style.display ="none";
        left.style.display ="none";
        injury.style.display="none";
        right.style.display ="none";
        gs.style.display= "none";
        gs.style.display = "block";
        shotgun.style.display ="none";
        text.innerHTML ="You begin at a gun store";

});




// mouse enter event

monkeyE.addEventListener('mouseenter', function() { 
    console.log("monkeyE");
    shotgun.style.display="none";
    injury.style.display="none";
    monkey.style.display="block";
    gs.style.display="none";

     text.innerHTML= "You give the injured man a medkit";
    
});



gs.addEventListener('dblclick', function(){
    console.log("gs dbl clicked")
    shotgun.style.display="none";
   injury.style.display= "none";
   gs.style.display= "none";
   pg.style.display="block";
   text.innerHTML ="OUCH";
   text.innerHTML="You now own a shotgun legally"; 

}); 

pg.addEventListener('dblclick', function(){
    console.log("pg dbl clicked")
    shotgun.style.display="none";
   injury.style.display= "none";
   gs.style.display= "none";
   pg.style.display="none";
   text.innerHTML="You're now tasked with protecting O block"; 
   protect.style.display="block";

}); 

gs.addEventListener('dblclick', function(){
    console.log("gs dbl clicked")
    shotgun.style.display="none";
   injury.style.display= "none";
   gs.style.display= "none";
   pg.style.display="block";
   text.innerHTML ="OUCH";
   text.innerHTML="You now own a shotgun legally"; 

}); 

injury.addEventListener('dblclick', function(){
    console.log("run dbl clicked")
    shotgun.style.display="none";
   injury.style.display= "none";
   gs.style.display= "none";
   pg.style.display="none";
   run.style.display="block";
   text.innerHTML="You're now on the run from the cops"; 

}); 