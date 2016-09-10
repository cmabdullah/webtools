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
// //l146-0000
// function multiply(x,y){
// 	return x*y ;
// }
// console.log(multiply(10,6));
// multiply.version = "v.2.03.5";
// console.log(multiply.version);

// //finction factory
// function makemultiplier(multiplier){
// 	var myfunc = function (x){
// 		return multiplier*x ;
// 	};
// 	return myfunc;
// };

// var multiplyby3 = makemultiplier(3);
// console.log(multiplyby3(20));

// var doubleall = makemultiplier(3);
// console.log(doubleall(200))


// //passing function as a argument
// function doOperationOm(x,operation){
// 	return operation(x) ;
// }

// var result = doOperationOm (5 , multiplyby3) ;
// console.log(result);

// result = doOperationOm(100 , doubleall);
// console.log(result);

// //end



/*****************Passing Variables by Value vs. by Reference***/
// l147-0002
// var a = 7;
// var b = a;
// console.log("a is :" +a);
// console.log("b is :" +b);

// b = 5;
// console.log("after b is update");
// console.log("a is :" +a);
// console.log("b is :" +b);

/*  panding
var a = {x: 7};
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update :");
console.log(a);
console.log(b);
end    */


// pass by refference vs by value
// function changePrimitive(primitive){
// 	console.log("in changePrimitive....");
// 	console.log("before");
// 	console.log(primitive);

// 	primitive =8;
// 	console.log("after");
// 	console.log(primitive);
// }
// var value = 10;
// changePrimitive(value);//value = primitive
// console.log("after changePrimitive, origin value");
// console.log(value);






/*** not working update your browser
function changeObject(ObjVal){
	console.log("in changeObject....");
	console.log("before");
	console.log(ObjVal);

	ObjVal.x =8;
	console.log("after");
	console.log(ObjVal);
}
var value = 10;
changeObject(value);//value = ObjVal
console.log("after changeObject, origin value");
console.log(value);
**/


/*********Function Constructors, prototype, and the 'this'***/
// function test(){
// 	console.log("hello World");
// }
// test();

// console.log(this);

/*
this.myname = "abdullah" ;
console.log(window.myname);


//function calculate pi val

function circle (radius){
	this.radius = radius;

	this.getarea = function (){
		return Math.PI * Math.pow(this.radius , 2);
	};
}

var mycircle = new circle(10);
// console.log(mycircle);
console.log(mycircle.getarea()) ;
*/


/*function prototype*/

function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.getArea = 
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);