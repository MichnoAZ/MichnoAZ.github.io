function customTag(tagName,fn){
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagInstances = document.getElementsByTagName(tagName);
    //for each occurrence run the associated function
        for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
        }
}
 
function extand(element) {
        el = document.querySelector(element)
        el.setAttribute('style','border:30px;')
}   
 
customTag("new-border",extand);
