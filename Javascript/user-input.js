let username;
// username=window.prompt("What's your username");
// console.log(username);

document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myh2").textContent=`Hello ${username}`
   
};

