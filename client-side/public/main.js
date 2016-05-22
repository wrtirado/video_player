var video,
    playPause,
    seekSlider,
    curtimetext,
    durtimetext,
    muteBtn,
    volumeSlider,
    videoContainer,
    buttonBar

function runPlayer(){
  // Set object references
  video = document.getElementById("Video1")
  playPause = document.getElementById("play")
  seekSlider = document.getElementById("seekSlider")
  curtimetext = document.getElementById("curtimetext")
  durtimetext = document.getElementById("durtimetext")
  muteBtn = document.getElementById("muteBtn")
  volumeSlider = document.getElementById("volumeSlider")
  videoContainer = document.getElementById("videoContainer")
  buttonBar = document.getElementById("buttonBar")
  // Add event listeners
  playPause.addEventListener("click", playPauseVideo, false)
  seekSlider.addEventListener("change", vidSeek, false)
  video.addEventListener("timeupdate", seekTimeUpdate, false)
  muteBtn.addEventListener("click", vidMute, false)
  volumeSlider.addEventListener("change", setVolume, false)
  videoContainer.addEventListener("mouseover", showControllBar, false)
  videoContainer.addEventListener("mouseleave", hideControllBar, false)


}
window.onload = runPlayer

function playPauseVideo() {
       if (video.paused) {
          video.play();
       } else {
          video.pause();
       }
    }

    function restart() {
        var video = document.getElementById("Video1");
        video.currentTime = 0;
    }

    function vidSeek (){
      var seekTo = video.duration * (seekSlider.value / 100)
      video.currentTime = seekTo
    }

    function seekTimeUpdate (){
      var newTime = video.currentTime * (100 / video.duration)
      seekSlider.value = newTime
      var currentMins  = Math.floor(video.currentTime / 60)
      var currentSecs  = Math.floor(video.currentTime - currentMins * 60)
      var durationMins = Math.floor(video.duration / 60)
      var durationSecs = Math.floor(video.duration - durationMins * 60)

      if(currentSecs < 10){
        currentSecs = "0"+currentSecs
      }
      if(durationSecs < 10){
        durationSecs = "0"+durationSecs
      }
      if(currentMins < 10){
        currentMins = "0"+currentMins
      }
      if(durationMins < 10){
        durationMins = "0"+durationMins
      }
      curtimetext.textContent = currentMins + ":" + currentSecs
      durtimetext.textContent = durationMins + ":" + durationSecs
    }

    function showControllBar () {
      buttonBar.style.opacity = 1
    }

    function hideControllBar () {
      buttonBar.style.opacity = 0.0
    }

    function vidMute (){
      if (video.muted) {
         video.muted = false
         volumeSlider.value = 100
      } else {
         video.muted = true
         volumeSlider.value = 0
      }
    }

    function setVolume (){
      video.volume = volumeSlider.value / 100
    }
