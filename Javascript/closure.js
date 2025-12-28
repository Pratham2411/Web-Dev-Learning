// A fn defined inside another finction
// The inner fn has access to variables and scope of outer fn
function outer() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    return {increment};
}

let counter = outer();
counter.increment();
counter.increment();
counter.increment();
