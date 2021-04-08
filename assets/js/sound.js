var track = document.getElementById('track');

var controlBtn = document.getElementById('click');

function playPause() {
    if (track.paused) {
        track.play();
    } else {
        track.pause();
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "click";
});
