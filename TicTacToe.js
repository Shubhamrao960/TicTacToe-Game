let boxes=document.querySelectorAll(".box");
let rBtn=document.querySelector("#resetbutton");
let newGameBtn=document.querySelector("#new-game");
let msgContainer= document.querySelector(".msg-container");
let msg=document.querySelector("#message");

let turn0=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
box.addEventListener("click",()=>{
    // console.log("box clicked")
    if(turn0){
        box.innerText="0";
        turn0=false;
    }else{
        box.innerText="X";
        turn0="true";
    }
    box.disabled=true;
    checkWinner();
});
});  
const checkWinner=()=>{
      for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
            let p1=boxes[pattern[0]].innerText;
            let p2=boxes[pattern[1]].innerText;
            let p3=boxes[pattern[2]].innerText;
      
if(p1!=""&& p2!=""&&p3!=""){
    if(p1=== p2&& p2 ===p3){
        // console.log("you are winner",p1);
        showWinner(p1);
        disableBoxes();

    }
}
}
}
const showWinner=(winner)=>{
    msg.innerText= `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableeBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turn0=true;
    enableeBoxes();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click",resetGame);
rBtn.addEventListener("click",resetGame);
