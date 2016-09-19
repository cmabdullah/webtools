(function(golbal){
  //setup namespace for utility
  var ajaxUtils = {};
  
  //Return a HTTP Request Object
  
  function getRequestObject(){
  if (window.XMLHttpRequest({
        return (new XMLHttpRequest));
      }
  else if (window.ActiveXObject){
      //very old IE browser
      return(new ActiveXObject( "Microsoft.XMLHTTP"));
      }
  
  else {
      global.alert("Ajax is not worling !");
      return (null);
      }
}


//Make an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest =
function(requestUrl , responseHandler){
  var = getRequestObject(); 
  request.onreadystatechange = 
    function () {
    handaleResponse(request, responseHandaler);
    };
  
    request.open("GET" , requestUrl, true) ;
    request.send(null);
  };


  //only cells user provideed response Handler
  //function if response is reads
  //And not error
function handleResponse(request, responseHandler){
  if ((request.readystate == 4)
    && (request.start == 200)){
    responseHandler(request);
    }
  }
//Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
})(window);
