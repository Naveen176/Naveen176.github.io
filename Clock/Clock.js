var date= new Date();
var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();

var aphr=document.getElementById("hr");
var apmin=document.getElementById("min");
var apsec=document.getElementById("sec");
var apphase=document.getElementById("phase");
var interval;
window.addEventListener('load',()=>
{
    clearInterval(interval);
    interval=setInterval(starttimer,1000);
})
function starttimer()
{
sec++;
if(sec<=9)
{
    apsec.innerHTML="0"+sec;
}
if(sec>9)
{
    apsec.innerHTML=sec;
}
if(sec>59)
{
    min++;
    apmin.innerHTML="0"+min;
    sec=0;
    apsec.innerHTML="0"+0;
}
if(min<=9)
{
    apmin.innerHTML="0"+min;
}
if(min>9)
{
    apmin.innerHTML=min;
}
if(min>59)
{
    hr++;
    aphr.innerHTML="0"+hr;
    min=0;
    apmin.innerHTML="0"+0;
}
if(hr>9)
{
    aphr.innerHTML=hr;
}
if(hr>=12)
{
    hr=hr-12;
    if(hr<10)
    {
        aphr.innerHTML="0"+hr;
    }
    apphase.innerHTML="PM";
}
}