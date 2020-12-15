/*
    T-diagram
    ______________________________
    i   |   1,3,5,7,9,11

    output: 3,9
*/

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}