  let buttons=document.querySelectorAll(".myButtons");
//   console.log(buttons);

// Add html/css in nodelist
// (element,callback)
  buttons.forEach(button=>{
     button.style.backgroundColor="green";
     button.textContent+="⭐";
  });
  // (eventtype,callback with event parameter given)
 
  buttons.forEach(button=>{
     button.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor="hsl(205, 100%, 40%)";
     })
  });

    buttons.forEach(button=>{
     button.addEventListener("mouseout",event=>{
        event.target.style.backgroundColor="hsl(205, 100%, 60%)";
     })
  });

   buttons.forEach(button=>{
     button.addEventListener("click",event=>{
        event.target.style.backgroundColor="tomato";
     })
  });

  // Adding an element to nodelist
    // create one
   const newButton=document.createElement("button");
   // add properties
   newButton.textContent="Button 5⭐";
   newButton.classList="myButtons";
   // append to dom
   document.body.appendChild(newButton);
//   // Removing an element
//    let buttons=document.querySelectorAll(".myButtons");
//    buttons.forEach(button=>{
//          button.addEventListener("click",event=>{
//         event.target.remove();
//         buttons=document.querySelectorAll(".myButtons");
//      })
//    })