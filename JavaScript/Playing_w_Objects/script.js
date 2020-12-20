// clear console
function clearConsole(){
    console.clear();
}

function objectsAssignment() {
    clearConsole();

    let users = [
        {
            name: "Michael",
            age: 37
        },
        {
            name: "John",
            age: 30
        },
        {
            name: "David",
            age: 27
        }
    ];

    console.log("John is " + users[1].age);
    console.log("Name of first object: " + users[0].name);

    console.log("\nName and Age of Each User");
    for (let user in users) {
        console.log(`${users[user].name} - ${users[user].age}`);
    }
}


function michaelsPurchase() {
    clearConsole();

    let glazedDonuts = [
        {
            frosting: 'glazed',
            style: 'cake',
            type: 'old fashioned',
            age: '45',
            time: 'minutes'
        },
        {
            frosting: 'glazed',
            style: 'yeast raised',
            type: 'regular',
            age: '5',
            time: 'minutes'
        },
        {
            frosting: 'glazed',
            style: 'yeast raised',
            type: 'jelly filled',
            age: '1',
            time: 'seconds'
        }
    ];

    let numPurchase = 0;
    for (let donut in glazedDonuts) {
        console.log(glazedDonuts[donut].type);
        if ((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time === 'minutes') || glazedDonuts[donut].time == 'seconds') {
            numPurchase++;
            console.log('yes this donut...\n\n');
        } else {
            console.log('not this donut...\n\n');
        }
    }
    console.log(`\nLooks like Mike can buy ${numPurchase} donuts!`);

}