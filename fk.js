var window_unity = document.getElementById('unity-player-container-wrapper');
document.addEventListener('click', event => {
window_unity.requestFullscreen();
});
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        window_unity.requestFullscreen();
    }
}
