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
