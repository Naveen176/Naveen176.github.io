var gueses=0;

var rand=Math.floor(Math.random()*10)+1;
let startb=document.getElementById("startb");
let level=document.getElementById("level");
let game=document.getElementById("game");
let instructions=document.getElementById("instructions");

let easy=document.getElementById('easy');
let medium=document.getElementById('medium');
let hard=document.getElementById('hard');
let ans=document.getElementById('ans');
let ans2=document.getElementById('ans2');

easy.addEventListener('click',()=>
{
    gueses=4;//i.e 5 chances
});

medium.addEventListener('click',()=>
{
    gueses=2;//i.e 3 chances
});

hard.addEventListener('click',()=>
{
    gueses=1;//i.e 2 chances
});

startb.addEventListener('click',()=>
{
    startb.style.display='none';
    instructions.style.display='none';
    level.style.display='block';
});
level.addEventListener('click',()=>
{
    level.style.display='none';
    game.style.display='block';
})
function Guess()
{
    console.log("clicked");
    var num=document.getElementById("num").value;
    if(num.length==0)
    {
        alert("Enter your number to start the game")
    }
    else
    {
        if((num>rand)&&gueses!=0)
        {
            gueses=gueses-1;
            document.getElementById("ans").innerHTML="Try smaller Number";
            document.getElementById("ans").addEventListener('click',Guess);
        }
        else if((num<rand)&&gueses!=0)
        {
            gueses=gueses-1;
            document.getElementById("ans").innerHTML="Try larger Number ";
            document.getElementById("ans").addEventListener('click',Guess);
        }
        else if ((num==rand)&&gueses!=0)
        {
            document.getElementById("ans").innerHTML="Well Done !!";
            //document.getElementById("ans").addEventListener('click',Guess);
        }
        else
        {
            document.getElementById("ans2").innerHTML="No more Chances ";
            document.getElementById("ans").innerHTML="The number is "+rand;
        }
    }
    //ans.style.display='block';
}