let Buttons = document.querySelectorAll(".box")
let reset_btn = document.querySelector("#reset-btn")
let new_btn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let winning_msg = document.querySelector("#winning_msg")
let gamePage = document.querySelector(".container")

let turnO = true // player X , player O 

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,7],
    [2,4,6]
];
const reset_game = () => {
    turnO = true;
    enableAllbtn()
    Buttons.innerText= "";
    msgContainer.classList.add("hide");
    gamePage.classList.remove("hide")
}
Buttons.forEach((box) => {
    box.addEventListener("click" , () => {
        
        if (turnO){
            box.innerText= "O";
            turnO=false;

        } else {
            box.innerText= "X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner()
        console.log(box.innerText);
    })
})
const  showWinner = (winner) => {
    winning_msg.innerText=`Congratulation.The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gamePage.classList.add("hide")    // uncomment for hide game page 
    disableAllbtn()
}
const disableAllbtn = () => {
    for(let box of Buttons) {
        box.disabled= true;
    }
}

const enableAllbtn = () => {
    for(let box of Buttons) {
        box.disabled= false;
        box.innerText= "";

    }
}

const checkWinner = () => {
    for( let pattern of winPattern) {
        let Position1 = Buttons[pattern[0]].innerText ;
        let Position2 = Buttons[pattern[1]].innerText ;
        let Position3 = Buttons[pattern[2]].innerText ;
    
        if (Position1!="" && Position2!="" && Position3!=""){
            if (Position1===Position2 && Position2===Position3){
                console.log (`Winner is ${Position1}`)
                showWinner(Position1);
            }
        }
    }
}
reset_btn.addEventListener("click" , reset_game);
new_btn.addEventListener("click" , reset_game);




    
