let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X"
let isgameover=false;

// change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}
// logic for win


const win = () => {
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 18, 0],
        [6, 7, 8, 5, 30, 0],
        [0, 3, 6, -7, 18, 90],
        [1, 4, 7, 5, 18, 90],
        [2, 5, 8, 17, 18, 90],
        [0, 4, 8, 5, 18, 45],
        [2, 4, 6, 5, 18, 135],
    ]
    let boxTexts = Array.from(document.getElementsByClassName("boxText"))
    wins.forEach(element => {
        //    console.log( boxTexts[element[0]])
        if ((boxTexts[element[0]].innerText === boxTexts[element[1]].innerText && boxTexts[element[2]].innerText === boxTexts[element[1]].innerText) && (
            boxTexts[element[0]].innerText!==""))
            {
            document.getElementById("chance").innerText=boxTexts[element[0]].innerText +":"+"WON"
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="20vw";
            document.querySelector(".line").style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`
            document.querySelector(".line").style.width = "26vw";
            gameover.play();

            }
        });
        
    }


// logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener("click", () => {
        let boxText = element.getElementsByClassName("boxText")

        ting.play();


        // console.log(boxText[0])

        if (boxText[0].innerText == "") {
            boxText[0].innerText = turn;

            turn = changeTurn()
            win();
            if(!isgameover)
            document.getElementById("chance").innerText = "Turn of " + turn;
        }
        else {
            ting.pause()
        }
    })
});





// reset button

reset = () => {
    Array.from(document.getElementsByClassName("boxText")).forEach(element => {
        element.innerText = "";
    });
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.getElementById("chance").innerText ="Turn of X";
    turn="X";
    document.querySelector(".line").style.width = "0vw";
    
}


