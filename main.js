var timmer = 60;
var score = 0;
var r_n = 0;

function schorefun(){
  score += 10;
  document.querySelector("#scorevar").textContent = score;


}


function hit(){
  r_n = Math.floor(Math.random()*10);
  document.querySelector("#presshit").textContent = r_n;

}


function make_bubble(){

var count = "";


for(var i =1; i<=168; i++){
    var random_number = Math.floor(Math.random()*10);
    count += `<div class="bubble">${random_number}</div>`;
}
console.log("hellloe ");
document.querySelector("#mainbubble").innerHTML= count;


}

function time(){
  var settime =  setInterval(function(){
   if(timmer>0){
    timmer --;
    document.querySelector("#times").innerHTML = timmer;

   }
   else{
    
    document.querySelector("#mainbubble").innerHTML =  ` <h1> your score is ${score} </h1>   `;
    clearInterval(settime);
    alert(`  Game Over `);
    
     


   }

    },1000)
}

document.querySelector("#mainbubble").addEventListener("click",function(saz){
  var store = Number(saz.target.textContent);
  if(store === r_n){
    schorefun();
    make_bubble();
    hit();
  }
})






time();
make_bubble();
hit();



