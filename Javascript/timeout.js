// setTimeout(callback,delay);
 let timerId;

document.getElementById("startBtn").onclick = function () {
    timerId = setTimeout(() => {
        alert("Alert after 3 seconds");
    }, 3000);
};

document.getElementById("clearBtn").onclick = function () {
    clearTimeout(timerId);
};
