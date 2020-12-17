/*
    PREDICT

    VAR     | VALUES
    -----------------------------------
    arr     | [7,3,8,4,2,0,1]
    arr.len | 7
    i       | 0,1,2,3,4,5,6

    OUTPUT
    That is odd!, That is odd!, 8, 4, 2, 0, That is odd!
 */

// clear console
function clearConsole() {
    console.clear();
}

function predict2() {
    clearConsole();
    var arr = [7,3,8,4,2,0,1];
    for(var i = 0; i < arr.length; i++) { 
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        } 
        else{
            console.log("That is odd!");
        }
    }
}