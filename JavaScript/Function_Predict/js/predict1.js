/*
    PREDICT

    VAR     | VALUES
    -----------------------------------
    word    | greeting()
            | Hello

    OUTPUT
    Hello
 */

 // clear console
function clearConsole(){
    console.clear();
}

function predict1() {
    clearConsole();
    function greeting(){
        return "Hello";
        console.log("World");
    }
    let word = greeting();
    console.log(word);
}