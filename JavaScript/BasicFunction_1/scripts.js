// clear console
function clearConsole(){
    console.clear();
}


function basicFunction01() {
    clearConsole();

    function a(){
        return 35;
    }
    console.log(a())
    
}

function basicFunction02() {
    clearConsole();

    function a(){
        return 4;
    }
    console.log(a()+a());
}

function basicFunction03() {
    clearConsole();

    function a(b){
        return b;
    }
    console.log(a(2)+a(4));    
}

function basicFunction04() {
    clearConsole();

    function a(b) {
        console.log(b);
        return b*3;
    }
    console.log(a(3));         
}

function basicFunction05() {
    clearConsole();

    function a(b){
        return b*4;
        console.log(b);
    }
    console.log(a(10));
}

function basicFunction06() {
    clearConsole();

    function a(b){
        if(b<10) {
            return 2;
        }
        else {
            return 4;
        }
        console.log(b);
    }
    console.log(a(15));
}

function basicFunction07() {
    clearConsole();

    function a(b,c){
        return b*c;
    }
    console.log(10,3);
    console.log( a(3,10) );    
}

function basicFunction08() {
    clearConsole();

    function a(b){
        for(var i=0; i<10; i++){
            console.log(i);
        }
        return i;
    }
    console.log(3);
    console.log(4);
}

function basicFunction09() {
    clearConsole();

    function a(){
        for(var i=0; i<10; i++){
            i = i +2;
            console.log(i);
        }
    }
    a();    
}

function basicFunction10() {
    clearConsole();

    function a(b,c){
        for(var i=b; i<c; i++) {
            console.log(i);
        }
        return b*c;
    }
    a(0,10);
    console.log(a(0,10));
}

function basicFunction11() {
    clearConsole();

    function a(){
        for(var i=0; i<10; i++){
            for(var j=0; j<10; j++){
                console.log(j);
            }
            console.log(i);
        }
    }
    
}

function basicFunction12() {
    clearConsole();

    function a(){
        for(var i=0; i<10; i++){
            for(var j=0; j<10; j++){
                console.log(i,j);
            }
            console.log(j,i);
        }
    }    
}

function basicFunction13() {
    clearConsole();

    var z = 10;
    function a(){
        var z = 15;
        console.log(z);
    }
    console.log(z);    
}

function basicFunction14() {
    clearConsole();

    var z = 10;
    function a(){
        var z = 15;
        console.log(z);
    }
    a();
    console.log(z);
}

function basicFunction15() {
    clearConsole();

    var z = 10;
    function a(){
        var z = 15;
        console.log(z);
        return z;
    }
    z = a();
    console.log(z);
}