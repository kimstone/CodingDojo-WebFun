// clear console
function clearConsole(){
    console.clear();
}

// exercise 1 - print odds 1-20
// 1. Print out all odd numbers from 1 to 20
// 2. The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
function displayOddsWhileLoop(){
    clearConsole();
    let num = 0;
    while (num <= 20) {
        if ((num % 2) != 0) {
            console.log(num);
        }
        num+=1;
    }
}
function displayOddsForLoop() {
    clearConsole();
    for (let i = 0; i <=20; i+=1) {
        if ((i % 2) != 0) {
            console.log(i);
        }
    }
}

// exercise 2 - sum and print 1-5
// 1. Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// 2. The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
function displaySumWhileLoop() {
    clearConsole();
    let sum = 0;
    let num = 0;
    while (num <=5 ) {
        sum+=num;
        console.log(`Num: ${num}`);
        console.log(`Sum: ${sum}`);
        num+=1;
    }
}
function displaySumForLoop(){
    clearConsole();
    let sum = 0;
    for (let num = 0; num <=5; num+=1){
        sum+=num;
        console.log(`Num: ${num}`);
        console.log(`Sum: ${sum}`);
    }
}