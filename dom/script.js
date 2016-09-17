//Dom manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
function sayHello(){
  var name =
  document.getElementById("name").value;
  var massage = "Hello "+ name + "!";

  document
  // .getElementById("content")
  // .textContent = massage;
  document 
  .getElementById("content")
  .innerHTML = massage;

  if (name === "student"){
    var title =
    document
    .querySelector("#title")
    .textContent;
    title += "&lovin it" ;
    document
    .querySelector("#title")
    .textContent = title;
  }
}