let block = document.querySelectorAll(".block");
let imgbox=document.querySelector(".imgbox");

//imgbox.addEventListener("dragstart",()=>{console.log("started")});

//imgbox.addEventListener("dragend",()=>{console.log("droped")});

for(boxes of block)
{
    //boxes.addEventListener("dragenter",()=>{console.log("draging")})

    boxes.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    boxes.addEventListener("drop",(e)=>{
        e.target.append(imgbox);
    })
}