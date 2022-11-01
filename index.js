let player1_score = 0;
let player2_score = 0;

function Name()
{
var Player1Name = prompt("Entre your Name");
var Player2Name = prompt("Entre your Name");
document.getElementById("PLY1").innerHTML=Player1Name
document.getElementById('PLY2').innerHTML=Player2Name
}

function RandomChoice(){
//debugger;
let Win1=0,Win2=0
let num1 = Math.floor(Math.random() * 3);
if (num1==0) 
{ 
    console.log(num1+" Rock") 
    let Image1 = document.querySelector("#IMG1");
    Image1.src = "rock.png";
}

else if (num1==1) 
   {
    console.log(num1+" paper") 
    let Image1 = document.querySelector("#IMG1");
    Image1.src = "Paper.png";
    } 
  
else if (num1==2) 
  {
  console.log(num1+" Scossor") 
  let Image1 = document.querySelector("#IMG1");
  Image1.src = "Scisorrs.png";
  }   

let num2 = Math.floor(Math.random() * 3);
  
if (num2==0)
  {
    console.log(num2+" Rock") 
    document.querySelector('#IMG2').src="rock.png";
  }

else if (num2==1) 
   {
   console.log(num2+" paper")
   document.querySelector('#IMG2').src="Paper.png";
  } 

else if (num2==2) 
  {
    console.log(num2+" Scossor")
    document.querySelector('#IMG2').src="Scisorrs.png";
  }
    
 //rock 0  paper 1   sci 2 
if((num1 == 0) && (num2 == 1)) 
{
player2_score=player2_score+1
Win2=Win2=1
}
else if ((num1 == 0) && (num2 == 2))
{
player1_score=player1_score+1
Win1=Win1=1
} 
else if ((num1 == 1) && (num2 == 0))
{
player1_score=player1_score+1
Win1=Win1=1
}  
else if ((num1 == 1) && (num2 == 2))
{
player2_score=player2_score+1
Win2=Win2=1
}
else if ((num1 == 2) && (num2 == 0))
{
player2_score=player2_score+1
Win2=Win2=1
}
else if ((num1 == 2) && (num2 == 1))
{
player1_score=player1_score+1
Win1=Win1=1
}
let Score1 = document.getElementById("P1SC");
Score1.innerHTML = player1_score;
let Score2 = document.getElementById("P2SC");
Score2.innerHTML = player2_score;
    
//Scoreboard
var tag = document.createElement("p");
var text = document.createTextNode(Win1+"  :  "+Win2);
tag.appendChild(text);
var element = document.getElementById("Scoreboard_Number");
element.appendChild(tag);
}