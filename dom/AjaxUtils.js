//(function(golbal){

  (function (global) {
  //setup namespace for utility
  var ajaxUtils = {};
  





  //Return a HTTP Request Object
  
  function getRequestObject(){
  if (window.XMLHttpRequest){//current version of AJAX
        return (new XMLHttpRequest());
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
  var request = getRequestObject(); 
  request.onreadystatechange = 
    function () {
    handleResponse(request, responseHandler);
    };
  
    request.open("GET" , requestUrl, true) ;
    request.send(null);
  };


  //only cells user provideed response Handler
  //function if response is reads
  //And not error
function handleResponse(request, responseHandler){
  if ((request.readyState == 4)
    && (request.status == 200)){
    responseHandler(request);
    }
  }
//Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
})(window);
