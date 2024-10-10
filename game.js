let btn=document.querySelectorAll(".box");
let newgamebtn=document.querySelector("#btn2");
let resetbtn=document.querySelector("#btn1");
let msg=document.querySelector(".msg");
let para=document.querySelector("p");

turnX = true;

const win_patterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];


btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText='O';
            turnX=true;
        }
        check();
        box.disabled = true;
    })
})

const check=()=>{
    for(let pattern of win_patterns){
        let psn1 = btn[pattern[0]].innerText;
        let psn2 = btn[pattern[1]].innerText;
        let psn3 = btn[pattern[2]].innerText;

        if(psn1!="" && psn2!="" && psn3!=""){
            if(psn1===psn2 && psn2===psn3 && psn3===psn1){
                showWinner(psn1);
                disabled();
            }
        }
    }   
}

const resetGame=()=>{
    turnX=true;
    enabled();
    msg.classList.add("msg");
}

const disabled=()=>{
    for(let box of btn){
        box.disabled=true;
    }
}

const enabled=()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    para.innerText=`Congratultions! Winner is ${winner}`;
    msg.classList.remove("msg")
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);