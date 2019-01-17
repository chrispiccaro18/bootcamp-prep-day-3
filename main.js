var sum = 3 + 4;
var x = 12;
x++;
console.log('hello console!', sum, x);

var y = x * 32;

if(x > 13) {
    console.log(x);
}
else {
    console.log('sorry, x too small');
}

x = 15;

// 1 initialize
// 2 condition
// 3 post loop action
for(var i = 0; i < x; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

console.log(y);

function sayHello() {
    console.log('hi');
}
if(x % 2 === 1){
    sayHello();
}

// eslint-disable-next-line
function evenOrOdd() {
    var input = document.getElementById('number');
    console.log(input.value);

    var z = input.value;

    if(z % 2 === 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}