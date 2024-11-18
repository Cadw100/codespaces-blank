left = document.querySelector('.left');
right = document.querySelector('.right');
leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let shotgun = document.querySelector('.shotgun');
shotgun.style.display="none"; 

left.addEventListener('click', function() {

    leftRight.style.display ="none"; 
    left.style.display ="none";
    right.style.display ="none";

    shotgun.style.display="block";

    text.innerHTML="click to shoot";

});

shotgun.addEventListener('dblclick', function(){
    
    text.innerHTML ="OUCH";

});