var window_unity = document.getElementById('unity-player-container-wrapper');
window_unity.requestFullscreen();
document.addEventListener("fullscreenChange", function () {
          if (fullscreenElement != null) {
              console.info("Went full screen");
          } else {
              window_unity.requestFullscreen();              
          }
      });
