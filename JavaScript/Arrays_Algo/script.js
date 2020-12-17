function clearConsole(){
    console.clear();
}
// print values and sum
function algo1() {
    clearConsole();
    let arr = [6,3,5,1,2,4];
    let sum = 0;
    for(let i = 0; i < arr.length; i+=1) { 
        sum+=arr[i];
        console.log(`Num: ${arr[i]}, Sum ${sum}`);
    }
}

/* function algo1() {
    clearConsole();
    console.log("Using forEach\n");
    let arr = [6,3,5,1,2,4];
    let sum = 0;

    // forEach looping thru array
    // mirrors classic for loop
    console.log("\nMirroring Classic Loop");
    arr.forEach(function (aNum) {
        console.log(`Num: ${aNum}`);
    })

    // forEach looping thru array
    // using index parameters
    console.log("\nUsing Index parameters");
    arr.forEach(function (aNum, index) {
        console.log(`Index: ${index}, Num: ${aNum}`);
    })

    // forEach looping thru array
    // using index and array parameters
    console.log("\nUsing Index and Array parameters");
    arr.forEach(function (aNum, index, array) {
        console.log(`${array}`);
    })

    // forEach looping thru array
    // using index and array parameters
    console.log("\nUsing Index and Array parameters - using arrow");
    arr.forEach((aNum, index, array) => {
        console.log(`${array}`);
    })
} */

// value * position
function algo2() {
    clearConsole();
    let arr = [6,3,5,1,2,4];
    let arrValues = [];
    for(let i = 0; i < arr.length; i+=1) { 
        arrValues.push(arr[i]*i);
    }
    console.log(arrValues);
}