/*
    PREDICT

    VAR     | VALUES
    -----------------------------------
    result1     | add(3,5)
                  8
    result2     | add(4,7)
                  11
    num1        | 3,4
    num2        | 5,7
    sum         | 8, 11

    OUTPUT
    Summing Numbers!
    num1 is: 3
    num2 is: 5
    Summing Numbers!
    num1 is: 4
    num2 is: 7
    8
    11
 */

// clear console
function clearConsole(){
    console.clear();
}

function predict2() {
    clearConsole();
    function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
    var result1 = add(3,5);
    var result2 = add(4,7);
    console.log(result1);
    console.log(result2);
}