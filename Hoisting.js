//Hoiesting

console.log(me);
//console.log(job);
//console.log(birh);


var me = "Ambuj";
let job = "teacher";
const birh = 1992;


console.log(addDecl(3, 6));
//console.log(addExp(3, 6));
//console.log(addArrow(3, 6));



function addDecl(a, b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b;
}

const addArrow = () => {
    return a + b;
}

//Example

if (!newProducts) {
    deleteShoppingCart();
}
var newProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted!")
}

//example
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
