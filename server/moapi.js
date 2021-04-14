function tag(tagName,fn){
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
        for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
        }
}
function app() {
bm.requestFullscreen();
window.scrollTo(0,1);
}
function mopt() {
var bm = document.getElementsByTagName('mobile');
bm.addEventListener('click',app)
bm.addEventListener('touchstart',app)
}
tag('mobile',mopt);
