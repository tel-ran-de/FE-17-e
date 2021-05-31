const block = document.querySelector(".timout-color");

const changeColorAction = () => {
    block.classList.toggle("blue");
    block.classList.toggle("red");
}

const changeColor = () => {
  setTimeout(() => {
    changeColorAction()
  }, 2000 );
};

const loopColor = () => {
    let nLoop = 0
    let loopColorId = setInterval(() => {
        document.querySelector('#countLoop').innerText = nLoop
        changeColorAction()
        nLoop++
        if (nLoop > 10) {
            clearInterval( loopColorId )
            document.querySelector('#countLoop').innerText ='Loop is end'
        }
    }, 1000)
}

document.querySelector("#changeColor").addEventListener("click", changeColor);

document.querySelector("#loopColor").addEventListener("click", loopColor);
