// clear console
function clearConsole(){
    console.clear();
}

function challenge05() {
    clearConsole();


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