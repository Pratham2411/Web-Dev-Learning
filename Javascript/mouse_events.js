// eventListner :- 
// events: click,mouseover,mouseout
// .addEventListner(event,callback)

const myBox=document.getElementById("myBox");
const myButton=document.getElementById("myButton");

// function changeColor(event){ // event is given
//    event.target.style.backgroundColor="tomato";
//    event.target.textContent="OUCH! 🤕"
// }

// myBox.addEventListener("click",changeColor);
// myBox.addEventListener("click",function(event){
//        event.target.style.backgroundColor="tomato";
//       event.target.textContent="OUCH! 🤕"
// });

myButton.addEventListener("click",(event)=>{
    //   event.target.style.backgroundColor="tomato";
    //   event.target.textContent="OUCH! 🤕"
     myBox.style.backgroundColor="tomato";
     myBox.textContent="OUCH! 🤕"
});

// mouseover

myButton.addEventListener("mouseover",(event)=>{
      myBox.style.backgroundColor="yellow";
     myBox.textContent="Don't do it 😨"
});
// mouseout
myButton.addEventListener("mouseout",(event)=>{
      myBox.style.backgroundColor="lightgreen";
     myBox.textContent="Click Me😊"
});