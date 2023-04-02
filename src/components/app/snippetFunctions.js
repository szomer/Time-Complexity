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

function twoDimensionalArray(n) {
    var startTime = performance.now();

    var arr = [];

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            arr.push(`${i}, ${j}`);
        }
    }

    console.log("[Two Dimensional]", arr);

    var endTime = performance.now();
    return (parseFloat((endTime - startTime).toFixed(8)));

}

function fibonacci(n) {
    var startTime = performance.now();

    var arr = [];
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= n; i++) {
        arr.push(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    console.log("[Fibonacci]", arr);

    var endTime = performance.now();
    return (parseFloat((endTime - startTime).toFixed(8)));
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

export { oddEvenNumber, sumUp, twoDimensionalArray, fibonacci, factorial };