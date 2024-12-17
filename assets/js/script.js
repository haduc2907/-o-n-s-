const background = document.querySelector("#background");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const valueNumber = document.querySelector(".input");
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");
const error = document.querySelector(".error");




let html = "";
button1.addEventListener("click", ()=>{
    button1.remove();
    button2.classList.remove("none");
    valueNumber.classList.remove("none");
})
valueNumber.addEventListener("keydown", (event)=>{
    if (event.key == 'Enter'){
        const randomNumber = Math.floor(Math.random() * 99);
        if (valueNumber.value < 0 || valueNumber.value > 99){
            error.innerHTML =`<button class="button5">Nhập lại</button>`;
            html = `
            Vui lòng nhập từ 0 đến 99!
            `
            button2.classList.add("none");
            valueNumber.classList.add("none");
            error.classList.remove("none");
            error.innerHTML += html;
            const button5 = document.querySelector(".button5");
            button5.addEventListener("click", ()=>{
                button2.classList.remove("none");
                valueNumber.classList.remove("none");
                error.classList.add("none");
            })
        }
        else{
            if (valueNumber.value == randomNumber){
                correct.innerHTML = `<button class="button3">Chơi lại</button>`;
                html = `
                Chính xác! <hr> Con số là: ${randomNumber}
                `
                button2.classList.add("none");
                valueNumber.classList.add("none");
                correct.classList.remove("none");
                correct.innerHTML += html;
                const button3 = document.querySelector(".button3");
                button3.addEventListener("click", ()=>{
                    button2.classList.remove("none");
                    valueNumber.classList.remove("none");
                    correct.classList.add("none");
                })
            }
            else if (valueNumber.value != randomNumber){
                wrong.innerHTML = `<button class="button4">Chơi lại</button>`;
                html = `
                Không đúng! <hr> Con số là: ${randomNumber}
                `
                button2.classList.add("none");
                valueNumber.classList.add("none");
                wrong.classList.remove("none");
                wrong.innerHTML += html;
                const button4 = document.querySelector(".button4");
                button4.addEventListener("click", ()=>{
                    button2.classList.remove("none");
                    valueNumber.classList.remove("none");
                    wrong.classList.add("none");
                })
            }
        }
    }
})
button2.addEventListener("click", ()=> {
    const randomNumber = Math.floor(Math.random() * 99);
    if (valueNumber.value < 0 || valueNumber.value > 99){
        error.innerHTML =`<button class="button5">Nhập lại</button>`;
        html = `
        Vui lòng nhập từ 0 đến 99!
        `
        button2.classList.add("none");
        valueNumber.classList.add("none");
        error.classList.remove("none");
        error.innerHTML += html;
        const button5 = document.querySelector(".button5");
        button5.addEventListener("click", ()=>{
            button2.classList.remove("none");
            valueNumber.classList.remove("none");
            error.classList.add("none");
        })
    }
    else{
        if (valueNumber.value == randomNumber){
            correct.innerHTML = `<button class="button3">Chơi lại</button>`;
            html = `
            Chính xác! <hr> Con số là: ${randomNumber}
            `
            button2.classList.add("none");
            valueNumber.classList.add("none");
            correct.classList.remove("none");
            correct.innerHTML += html;
            const button3 = document.querySelector(".button3");
            button3.addEventListener("click", ()=>{
                button2.classList.remove("none");
                valueNumber.classList.remove("none");
                correct.classList.add("none");
            })
        }
        else if (valueNumber.value != randomNumber){
            wrong.innerHTML = `<button class="button4">Chơi lại</button>`;
            html = `
            Không đúng! <hr> Con số là: ${randomNumber}
            `
            button2.classList.add("none");
            valueNumber.classList.add("none");
            wrong.classList.remove("none");
            wrong.innerHTML += html;
            const button4 = document.querySelector(".button4");
            button4.addEventListener("click", ()=>{
                button2.classList.remove("none");
                valueNumber.classList.remove("none");
                wrong.classList.add("none");
            })
        }
    }
    

})


