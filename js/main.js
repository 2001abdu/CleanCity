let tizim=document.querySelector(".lang");

let uzbek=document.querySelector(".uzbek");
let ozbek=document.querySelector(".ozbek");
let russian=document.querySelector(".russia");
function addLanguage(){
    uzbek.addEventListener('click', () =>{
        tizim.innerHTML="Uz";

        // let span=document.createElement("span");
        // console.log(span);
    });
    ozbek.addEventListener(`click`, () =>{
        tizim.innerHTML="Ru"
    });
    russian.addEventListener(`click`, () =>{
        tizim.innerHTML="Eng";
    })
}
addLanguage();

let addButtons=document.querySelector(".bars");
let listTitle=document.querySelector(".item__list");

addButtons.addEventListener("click", () =>{
    listTitle.classList.toggle("show");
})


// card js 
let cleanImg=document.querySelectorAll(".cleanImg");

let addImg=cleanImg.length;
console.log(addImg);

let mainLeft=document.querySelector(".main__left");
let mainRight=document.querySelector(".main__right");

let count=0;

mainRight.addEventListener("click", () =>{
    cleanImg[count].classList.remove("active");
    if(count<cleanImg.length-1){
        count++
    }else{
        count=0;
    }
    cleanImg[count].classList.add("active");
});
mainLeft.addEventListener("click", () =>{
    cleanImg[count].classList.remove("active");
    if(count > 0){
        count--
    }else{
        count = addImg-1;
    }
    cleanImg[count].classList.add("active");
});

let input=document.querySelector("input");
let inputName=document.querySelectorAll(".input__name");
count=0;

console.log(inputName);

input.addEventListener("click", () =>{
    for(let i=0; i<inputName.length-4; i++){
        inputName[count].classList.add("boxShadow");
        if(count<inputName.length-1){
            count++;
        }else{
            count=0;
        }
    }
})













