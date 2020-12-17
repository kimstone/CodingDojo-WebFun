/*
    PREDICT

    VAR         | VALUES
    -----------------------------------
    arr         | [ 1, 3, 8,-5,0,-2,4,-1]
    arr[ptr]    | [ 0, 1, 2, 3,4, 5,6, 7]
    arr(mod)    | [-1,-3,-8, 5,Zero, 2,4, -1]
    arr.len     | 8
    newArr      | [-2]
    i           | 0,1,2,3,4,5

    OUTPUT
    [-1,1,2, 3,4, 5,6, 7], []
    [-1,-3,2, 3,4, 5,6, 7], []
    [-1,-3,-8, 3,4, 5,6, 7], []
    [-1,-3,-8, 5,4, 5,6, 7], []
    [-1,-3,-8, 5,Zero, 5,6, 7], []
    [-1,-3,-8, 5,Zero, 2,4, -1], []

 */

// clear console
function clearConsole() {
    console.clear();
}

function predict3() {
    clearConsole();
    var arr = [1,3,8,-5,0,-2,4,-1];
    var newArr = [];
    for(var i = 0; i< arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i]);
            arr[i] = arr[i] * -1;
        }
        else if(arr[i] == 0){
            arr[i] = "Zero";
        }
        else{
            arr[i] = arr[i] * -1;
        }
    }
    console.log(arr);
    console.log(newArr);
}