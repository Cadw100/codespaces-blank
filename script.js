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
shotgun.style.display="none"; 
injury.style.display="none";
gs.style.display="none";
oblock.style.display="none";
monkey.style.display="none";



// Left button crodie

left.addEventListener('click', function() {
    console.log("clicked left");
 leftRight.style.display ="none"; 
 left.style.display ="none";
right.style.display ="none";
shotgun.style.display="block";
text.innerHTML="Double click to shoot";

});

// double click the shotgun

shotgun.addEventListener('dblclick', function(){
    console.log("shotgun dbl clicked")
    shotgun.style.display="none";
   injury.style.display= "none";
   gs.style.display= "none";
   gs.style.display= "block";
   injury.style.display="block";
   text.innerHTML ="OUCH";
   text.innerHTML="You shot a random for 0 reason"; 

}); 



// Right Button Crodie


    right.addEventListener('click', function(){
        console.log("right clicked")
        leftRight.style.display ="none";
        left.style.display ="none";
        right.style.display ="none";
        gs.style.display= "none";
        gs.style.display = "block";
        shotgun.style.display ="block";
        text.innerHTML ="You begin at a gun store";

});

// mouse enter event

monkey.addEventListener('mouseenter', function() { 
    shotgun.style.display="none";

    text.innerHTML= "Heres a medkit lil bro";
    
});