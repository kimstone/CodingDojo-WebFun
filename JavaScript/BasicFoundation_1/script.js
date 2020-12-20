// clear console
function clearConsole(){
    console.clear();
}

function challenge07() {
    clearConsole ();

    let arrZ = [];
    for (let n = 1; n <= 50; n+=1) {
        if (n % 2 != 0) {
            arrZ.push(n);
        }
    }
    console.log(`The new array is: ${arrZ}`);
    return arrZ;
}


function challenge06() {
    clearConsole();

    let arrX = [1, 3, 5, 7, 20];
    let len = arrX.length -1;
    let avgValue;
    let sum = 0;
    for (let n = 0; n <= len; n+=1) {
        sum+=arrX[n];
    }
    avgValue = sum/arrX.length;
    console.log(`Average value is: ${avgValue}`);
    return avgValue;
}


function challenge05() {
    clearConsole();

    let arrA = [-3,12,0,5,7];
    let len = arrA.length - 1;
    let maxValue = arrA[0];
    for (let n = 0; n <= len; n+=1) {
        if (arrA[n] > maxValue) {
            maxValue = arrA[n];
        }
    }
    console.log(`Max Value is: ${maxValue}`);
}


function challenge04() {
    clearConsole();

    let arrA = [1,2,5];
    let len = arrA.length - 1;
    let sum = 0;
    for(let n = 0; n <= len; n+=1) {
        sum+=arrA[n];
    }
    console.log(sum);
    return sum;
}


function challenge03() {
    clearConsole();
    
    let sum = 0;
    for(let n = 1; n <= 5000; n+=1) {
        if (n%2 != 0) {
            sum+=n;
            /* console.log(`n:${n}  sum:${sum}`); */
        }
    } 
    console.log(sum);
}


function challenge02() {
    clearConsole();
    
    let sum = 0;
    for(let n = 1; n <= 1000; n+=1) {
        if (n%2 === 0) {
            sum+=n;
        }
    } 
    console.log(sum);
}


function challenge01() {
    clearConsole();
    let arrA = [];
    for(let n = 1; n <= 255; n+=1) {
        arrA.push(n);
    }
    console.log(arrA);
    return arrA;
}