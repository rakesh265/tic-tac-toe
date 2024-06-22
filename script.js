let boxes =document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector(".msg");
let newBtn = document.querySelector(".new-btn")

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

let turnO = true;

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;

        checkWinner();
    });
});

let disableBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

let showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBtns();
    resetBtn.classList.add("hide")

}

let checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner" + pos1Val )
                showWinner(pos1Val)
            }
        }
    }

}

let restartGame = () =>{
    boxes.forEach((box)=>{
        box.innerText = ""
        box.disabled = false;
        turnO = true
    })
}

let newGame = () =>{
    restartGame()
    msgContainer.classList.add("hide")
    resetBtn.classList.remove("hide")
}


