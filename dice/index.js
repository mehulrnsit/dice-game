
var random1=Math.floor(Math.random()*6)+1;
randimg1="images/dice" + random1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , randimg1);

var random2=Math.floor(Math.random()*6)+1;
randimg2="images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randimg2);

if(random1>random2)
{
  document.querySelector("h1").textContent="Player1 won";
}
else if(random1<random2){
  document.querySelector("h1").textContent="Player2 won";
}
else{
  document.querySelector("h1").textContent="Draw";
}
