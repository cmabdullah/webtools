//Event handaling
document.addEventListener("DOMContentLoaded",
	function(event){
		//Unobtrusiv event binding
		document.querySelector("button")
		.addEventListener("click", function(){
			//call server to get name
			$ajaxUtils
			.sendGetRequest("name.txt",
				function(request){
					var name = request.responseText;

					document.querySelector("#content")
					.innerHTML = "<h2>Hello "+name + "!</h2>"; 
				}
				);
		});
	}
	);