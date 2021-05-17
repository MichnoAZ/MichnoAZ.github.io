function customTagRegistrator(tagName,fn){
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
        for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
        }
}
 
function codingdudeGravatar(element){
        //code for rendering the element goes here
        if (element.attributes.fullscreen){
            //get the email address from the element's email attribute
            var fullstate = element.attributes.fullscreen.value;
            if (fullstate==true) {
            document.addEventListener('click',function(){
            document.documentElement.requestFullscreen();
            }
            } else if (fullstate==false) {
                 console.log('Fullscreen disabled');
            } else {
            console.error('Status config error: unknown boolean state.');
            }
            }
if (element.attributes.oreintation){
            //get the email address from the element's email attribute
            var oreintation = element.attributes.oreintation.value;
            document.addEventListener('click',function(){
            document.documentElement.requestFullscreen();
            screen.oreintation.lock(oreintation);
            }
}   
if (element.attributes.bgcolor){
            //get the email address from the element's email attribute
            var bgcolor = element.attributes.bgcolor.value;
            document.body.style.backgroundColor = bgcolor;
            }
if (element.attributes.font){
            //get the email address from the element's email attribute
            var font = element.attributes.font.value;
            document.body.fontFamily = family;
            }
}   
}   
 
customTagRegistrator("app-config",codingdudeGravatar);
