
    var t,player1,player2,x,y,result,diceselector,diceselector2;
    var player1=prompt("First players' Name");
    document.querySelector("#player_1").innerHTML=player1;
    var player2=prompt("Second players' Name");
    document.querySelector("#player_2").innerHTML=player2;
function myme(){
    var x=Math.floor((Math.random()*6)+1);
    var y=Math.floor((Math.random()*6)+1);
    if(x==y){
        document.querySelector(".huge").innerHTML="Draw";
    }
    else if(x>y){
        document.querySelector(".huge").innerHTML=player1+" wins!";
    }
    else{
        document.querySelector(".huge").innerHTML=player2+" wins!";
    }
    var diceSelector="./images/dice"+x+".png";
    var diceSelector2="./images/dice"+y+".png";
    document.querySelectorAll("img")[0].setAttribute("src",diceSelector);
    document.querySelectorAll("img")[1].setAttribute("src",diceSelector2);

}







