

let card= document.querySelector(".trend");

let card2= document.querySelector(".trendSecond");

console.log(card);
let blog= document.querySelector(".trends");

let mainPage= document.querySelectorAll(".main");
function shops(){
    mainPage.style.display="none";
    blog.style.display="none";
   // card.style.display=""
   document.getElementById("blog").style.color="rgb(2, 173, 173)";
   document.getElementById("home").style.color="black";
   document.getElementById("shop").style.color="black";
   document.getElementById("Contact").style.color="black";
   
    
}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    document.getElementById("blog").style.color="rgb(2, 173, 173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("Contact").style.color="black";
    



}