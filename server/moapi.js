document.style.cursor = 'none';
document.addEventListener("keydown",function(e){
    var charCode = e.charCode || e.keyCode || e.which;
    if (charCode == 27){
         console.log('Escape is not sllowed on this page.');
        return false;
    }
});
addEventListener("click", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});
addEventListener("touchend", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});
addEventListener("touchhold", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});
