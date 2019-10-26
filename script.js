const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");



for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    let number = buttons[i].getAttribute("value");
    screen.value += number;
  });
};

equalBtn.addEventListener("click", function(){
  if(screen.value === ""){
    alert("Input is empty");
  }else{
  let value = eval(screen.value);
  screen.value = value;
  }
});

clearBtn.addEventListener("click", function(){
  screen.value= "";
});


// function getKeycode(event){
//   let keyCode = event.which || event.keyCode;
//   console.log(keyCode);
// };


