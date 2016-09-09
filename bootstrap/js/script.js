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
// function orc(cat){
// 	if (cat === undefined){
// 		cat = "cow";
// 	}
// 	console.log("dog with "+cat) ;
// }
// orc("tigar");
// orc();


/*****************object creation**/
/***
var company = new Object();
company.name = "facebook" ;
console.log(company);
company.ceo = new Object();
company.ceo.firstname = "Mark" ;
company.ceo.fevcolor = "blue" ;

console.log("company ceo name" + company.ceo.firstname) ;

console.log(company["name"]);
//company.$stock = 150;
//console.log(company);
var x = "stock of company";
company[x] = 150;
console.log("stock price is :"+ company[x]);
***/

/**************better way: object litteral synt3x**/
// var facebook = {
// 	name : "Facebook corporation",
// 	ceo:{
// 		firstname : "Mark",
// 		favcolor: "blue"
// 	},
// 	"stock of company": 150

// };
// console.log(facebook);


/***********************function explanetion***/
//l146-0000
function multiply(x,y){
	return x*y ;
}
console.log(multiply(10,6));
multiply.version = "v.2.03.5";
console.log(multiply.version);

//finction factory
function makemultiplier(multiplier){
	var myfunc = function (x){
		return multiplier*x ;
	};
	return myfunc;
};

var multiplyby3 = makemultiplier(3);
console.log(multiplyby3(20));

var doubleall = makemultiplier(3);
console.log(doubleall(200))


//passing function as a argument
function doOperationOm(x,operation){
	return operation(x) ;
}

var result = doOperationOm (5, multiplyby3) ;
console.log(result);

result = doOperationOm(100, doubleall);
console.log(result);

//end