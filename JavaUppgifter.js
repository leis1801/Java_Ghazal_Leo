// övning A
var tal;
tal = prompt('Skriv ett tal');
if (tal < 100) {
    console.log('För litet tal');
} else {
    console.log('För stort tal');
}


oneHigher = function(x) {
    return x +1;
}
console.log(oneHigher(5));

let x= "outside";

f1 = function () {
    var x;
    x= "inside f1";
    console.log(x);
};

f1();
console.log(x);

// Övning 4

Multiplicera2= function (x) {
    x= x * 2;
    console.log(x);
}
Multiplicera2(15);

//// 2 variant


////////
Delamed2 = function (x) {
    x /= 2
    console.log(x);
}

Delamed2(10);

///////

Adderar2tal = function (x) {
x += 5
console.log(x)}

Adderar2tal(7);

////////

Subtraherar2tal = function (x) {
    x -= 5
    console.log(x)}
    
Subtraherar2tal(7);


