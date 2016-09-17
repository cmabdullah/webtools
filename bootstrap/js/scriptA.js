

(function(){

var greeterA = {};

greeterA.name = "Abdullah";
var cdr = "hello " ;
greeterA.scriptA = function () {
	console.log(cdr+ "       " + greeterA.name);
}
window.greeterA = greeterA;
})(window);