function oddEvenNumber(n) {
    var startTime = performance.now();

    if (n % 2 === 0) {
        console.log(`[oddEvenNumber] ${n} is an even number.`);
    } else {
        console.log(`[oddEvenNumber] ${n} is an odd number.`);
    };

    var endTime = performance.now();
    return (parseFloat((endTime - startTime).toFixed(8)));
}

function sumUp(n) {
    var startTime = performance.now();

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = (sum + i);
    }
    console.log("[SumUp]", sum);

    var endTime = performance.now();
    return (parseFloat((endTime - startTime).toFixed(8)));
}

function nestedLoop(n) {
    var startTime = performance.now();

    var count = 0;

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            count++;
        }
    }

    console.log("[Nested Loop]", count);

    var endTime = performance.now();
    return (parseFloat((endTime - startTime).toFixed(8)));

}

function fibonacci(n) {
    var startTime = performance.now();

    console.log("[Fibonacci] last number:", fibonacciRec(n - 1));

    var endTime = performance.now();
    return (parseFloat((endTime - startTime).toFixed(8)));
}
function fibonacciRec(num) {
    if (num <= 1) return 1;
    return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}


function recursive(n) {
    for (var i = 0; i < n; i++) {
        recursive(n - 1);
    }
}

function factorial(n) {
    var startTime = performance.now();

    recursive(n);

    var endTime = performance.now();
    return (parseFloat((endTime - startTime).toFixed(8)));
}

export { oddEvenNumber, sumUp, nestedLoop, fibonacci, factorial };