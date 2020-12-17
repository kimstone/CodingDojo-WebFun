/*
    PREDICT

    VAR     | VALUES
    -----------------------------------
    i       | 
    num     |

    OUTPUT
    No output function was never called
 */

// clear console
function clearConsole(){
    console.clear();
}

function predict3() {
    clearConsole();
    function highFive(num) {
        for(var i=0; i<num; i++) {
            if(i == 5) {
                console.log("High Five!");
            }
            else {
                console.log(i);
            }
        }
    }
}