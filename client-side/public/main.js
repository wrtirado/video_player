var video,
    playPause,
    seekslider

function runPlayer(){
  // Set object references
  video = document.getElementById("Video1")
  playPause = document.getElementById("play")
  seekslider = document.getElementById("seekslider")
  // Add event listeners
  playPause.addEventListener("click", playPauseVideo, false)
}
window.onload = runPlayer

function playPauseVideo() {
       if (video.paused) {
          video.play();
          playPause.textContent = "Pause";
       } else {
          video.pause();
          playPause.textContent = "Play";
       }
    }

    function restart() {
        var video = document.getElementById("Video1");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("Video1");
        video.currentTime += value;
    }
