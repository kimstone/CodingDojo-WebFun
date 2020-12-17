/*
    PREDICT

    VAR     | VALUES
    -----------------------------------
    arr     | [8,6,7,5,3,0,9]
    arr.len | 7
    i       | 0,1,2

    OUTPUT
    8,6,7,5,3,0,9
 */

 // clear console
function clearConsole(){
    console.clear();
}

function predict1() {
    var arr = [8,6,7,5,3,0,9]
    for(var i = 0; i < arr.length; i++) {    
        console.log(arr[i]);
    }
}