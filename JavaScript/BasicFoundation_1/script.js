// clear console
function clearConsole(){
    console.clear();
}


function challenge13() {
    clearConsole();

    let arrX = [-3, -1, 2];
    for (let n = 0; n <= arrX.length -1; n+=1) {
        if (arrX[n] < 0) {
            arrX[n] = 'Dojo';
        }
    }
    console.log(arrX);
}


function challenge12() {
    clearConsole();

    let arrX = [1, 5, 10, -2];
    let first = arrX[0];
    let last = arrX[arrX.length-1];
    arrX[0] = last;
    arrX[arrX.length-1] = first;
    console.log(arrX);
}


function challenge11() {
    clearConsole();

    let arrX = [1, 5, 10, -2];
    let arrAgg = [];
    let maxValue = arrX[0];
    let minValue = arrX[0];
    let sum = 0;
    for (let n = 0; n <= (arrX.length - 1); n+=1) {
        if (arrX[n] > maxValue) {
            maxValue = arrX[n];
        }
        if (arrX[n] < minValue) {
            minValue = arrX[n];
        }
        sum+=arrX[n];
    }
    arrAgg.push(maxValue);
    arrAgg.push(minValue);
    arrAgg.push(sum/arrX.length);
    console.log(arrX);
    console.log(arrAgg)
}


function challenge10() {
    clearConsole();

    let arrX = [1, 5, 10, -2];
    for (let n = 0; n <= arrX.length -1; n+=1) {
        if (arrX[n] < 0) {
            arrX[n] = 0;
        }
    }
    console.log(arrX);

}


function challenge09() {
    clearConsole();

    let arrValues = [1, 5, 10, -2];
    for (let n = 0; n <= arrValues.length -1; n+=1) {
        arrValues[n] = arrValues[n] * arrValues[n];
    }
    console.log(arrValues);
}


function challenge08() {
    clearConsole ();

    let arrX = [1,3,5,7];
    let len = arrX.length -1;
    let cntr = 0;
    let theValues = '';
    let y = prompt("Please enter a number");
    for (let n = 0; n <= len; n+=1) {
        if (arrX[n] > y) {
            cntr+=1;
            theValues+=arrX[n].toString().concat(", ");
        }
    }
    theValues = theValues.slice(0, -2);
    console.log(`The array: ${arrX}`);
    console.log(`Number of Values > Y: ${cntr}`);
    switch (true) {
        case (cntr <= 0):
            console.log(`There are no values in the array greater than ${y}.`);
            break;
        case (cntr === 1):
            console.log(`There is ${cntr} value in the array greater than ${y}, it is ${theValues}.`);
            break;
        case (cntr >1):
            console.log(`There are ${cntr} values in the array greater than ${y}, which are ${theValues}.`);
            break;
    }
    return cntr;
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