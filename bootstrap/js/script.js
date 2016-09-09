//var x = "Hello World!";

/* var x = "Hello World!"; */
/*
var message = "in global" ;
console.log("global: message = " + message);

var a = function(){
	var message = "inside a";
	//console.log("a: message = " = + message);
	 console.log("a: message = " + message);
	
	function b (){
	console.log("b: message =" +message);
	}
	
b();

}

a();
*/

/*
var x;
console.log(x);
if (x == undefined){
	console.log("x is undefined");
}

x = 5;
if (x == undefined) {
	console.log("x is undefined");
}
else{
	console.log("x has been defined");
}
*/

/*
var string = "hello";
// string += " World";
string = string+ " World";
console.log(string + "!");
*/
/**math operation***/

// console.log((10+2)/6);
// console.log(undefined/90);

// function cm (c){
// 	console.log(c / 10);
// }
// cm();

/*****************equality*/
// var x =4, y=4;
// if (x == y){
// 	console.log("x=4 is equal to y=4");
// }
// x = "4";
// if (x == y){
// 	console.log("x='4' is equal to y = 4");
// }


// ********strict equality**
// if (x === y){
// 	console.log("strict x='4' is equal to y=4") ;
// }
// else{
// 	console.log("strict x='4' is not equal to y=4");
// }


/**************boolian expression true or false***/

// if (false || null || undefined || "" || 0 || NaN){
// 	console.log("this line wont be able to execute");
// }
// else{
// 	console.log("All are false");
// }
// /********************true statement********/
// if (true && "hello" && 1 && -1 && "false") {
// 	console.log("All are true");
// }





// For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   sum = sum + i;
// }
// console.log("sum of 0 through 9 is: " + sum);


/**********handling defult**/
function orc(cat){
	if (cat === undefined){
		cat = "cow";
	}
	console.log("dog with "+cat) ;
}
orc("tigar");
orc();