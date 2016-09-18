//Dom manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
document.addEventListener("DOMContentLoaded",
  function(event){

    function sayHello(event){
  // console.log(this);
  console.log(event);
  this.textContent = "Said it!";
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

//unobostrusive event binding
document.querySelector("button")
.addEventListener("click", sayHello);

// document.querySelector("button")
// .onclick = sayHello;


document.querySelector("body")
.addEventListener("mousemove",
  function(event){
    if (event.shiftKey === true){
      console.log("x : "+ event.clientX);
      console.log("y :" + event.clientY);

  }
}


  ); 

  }
  );




