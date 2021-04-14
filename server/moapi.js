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
          em = document.documentElement
        , rfa =
               em.requestFullScreen
            || em.webkitRequestFullScreen
            || em.mozRequestFullScreen
    ;
    rfa.call(em);
});
addEventListener("touchhold", function() {
    var
          sy = document.documentElement
        , rfd =
               sy.requestFullScreen
            || sy.webkitRequestFullScreen
            || sy.mozRequestFullScreen
    ;
    rfd.call(el);
});
