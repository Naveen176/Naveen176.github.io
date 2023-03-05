
let result=document.getElementById("result");
let upper=document.getElementById("upper");
let lower=document.getElementById("lower");
let number=document.getElementById("number");
let symbol=document.getElementById("symbol");

const array=[1,1,1,1];
const uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numbers=['0','1','2','3','4','5','6','7','8','9']
const symbols = '!@#$%^&*(){}[]=<>/,.'
generate.addEventListener('click',function()
{
    let Plength=document.getElementById("length").value;
    if (!upper.checked)
    {
        array[0]=0;
    }
    else
    {
        array[0]=1;
    }
    if(!lower.checked)
    {
        array[1]=0;
    }
    else
    {
        array[1]=1;
    }
    if(!number.checked)
    {
        array[2]=0;
    }
    else
    {
        array[2]=1;
    }
    if(!symbol.checked)
    {
        array[3]=0;
    }
    else
    {
        array[3]=1;
    }
    let i=0;
    let password="";
    while(i<Plength)
    {
        if(array[0]==1 && i<Plength) 
        {
            let temp=Math.floor(Math.random() * 26);
            password=password.concat(uppercase[temp]);
            i=i+1;
        }
        if(array[1]==1 && i<Plength)
        {
            let temp=Math.floor(Math.random() * 26);
            password=password.concat(lowercase[temp]);
            i=i+1;
        }
        if(array[2]==1 && i<Plength)
        {
            let temp=Math.floor(Math.random() * 10);
            password=password.concat(numbers[temp]);
            i=i+1;
        }
        if(array[3]==1 && i<Plength)
        {
            let temp=Math.floor(Math.random() * symbols.length);
            password=password.concat(symbols[temp]);
            i=i+1;
        }
    }
    result.innerHTML=password;
})
function copytext()
{
    navigator.clipboard.writeText(result.innerHTML);
    alert("password copied to clip board");
    result.remove();
}