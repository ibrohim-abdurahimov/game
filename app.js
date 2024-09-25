{
    let btn1 = document.querySelector(".btn1")
    let btn2 = document.querySelector(".btn2")
    let score1 = document.querySelector(".score1")
    let score2 = document.querySelector(".score2")
    let randomNumber1 = document.querySelector(".number1")
    let randomNumber2 = document.querySelector(".number2")

    btn1.addEventListener("click",function(){
        let res = Math.floor(Math.random()*10);
        randomNumber1.textContent= res;
        score1.textContent = +score1.textContent + res;
    })

    btn2.addEventListener("click",function(){
        let res = Math.floor(Math.random()*10);
        randomNumber2.textContent= res;
        score2.textContent = +score2.textContent + res;
    })
    
}