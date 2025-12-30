const myButton=document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.classList.add("hover");

    myButton.addEventListener("mouseover",event=>{
        event.target.classList.add("hover");
    });
// instead of add/remove we can use (.toggle)
    myButton.addEventListener("mouseout",event=>{
        event.target.classList.remove("hover");
    });
// replace(oldclass,newclass)
    myButton.classList.add("enabled");
    myButton.addEventListener("click",event=>{
        if(event.target.classList.contains("disabled")){
          event.target.textContent+="🤬";
        }
        else{
          event.target.classList.replace("enabled","disabled");
        }
       
    });

