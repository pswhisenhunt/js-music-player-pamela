var play = document.getElementsByClassName('fa-play');
var title = document.getElementById('song-title');
var pause = document.getElementsByClassName('fa-pause');



var playOrStopAudio = function() {
  for(var i = 0; i <= play.length-1; i++ ) {
    play[i].addEventListener('click', function(e) {
      var that = this;
      togglePlay(that);
    });
  }
};

var pauseAudio = function() {
  for(var i = 0; i <= pause.length-1; i++) {
    pause[i].addEventListener('click', function(e) {
      var audioFile = this.parentNode.children[2];
      var icon = this.parentNode.children[1];
      pauseSong(audioFile, icon);
    });
  }
};

var togglePlay = function(that) {
  var audioFile;
  if(that.classList.contains('fa-play')) {
    that.classList.remove('fa-play');
    that.classList.add('fa-stop');
    audioFile = that.parentNode.children[2];
    playSong(audioFile);
  }
  else {
    that.classList.remove('fa-stop');
    that.classList.add('fa-play');
    audioFile = that.parentNode.children[2];
    populateTitle(audioFile);
    stopSong(audioFile);
  }
};

var playSong = function(audioFile) {
  populateTitle(audioFile);
  audioFile.play();
};

var pauseSong = function(audioFile, icon) {
  title.innerHTML = 'Paused: <em>' + audioFile.dataset.title + '</em>';
  icon.classList.remove('fa-stop');
  icon.classList.add('fa-play');
  audioFile.pause();

};

var stopSong = function(audioFile) {
  audioFile.currentTime = 0;
  audioFile.pause();
};

var populateTitle = function(audioFile) {
  title.innerHTML = 'Now Playing: <em>' + audioFile.dataset.title + '</em>';
};


playOrStopAudio();
pauseAudio();
