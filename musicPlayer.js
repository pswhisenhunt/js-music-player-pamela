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
    audioFile = that.parentNode.children[2];
    playSong(audioFile);

    audioFile.addEventListener('ended', function() {
      audioFile.currentTime = 0;
      that.classList.remove('fa-stop');
      that.classList.add('fa-play');
      var nextSong = that.parentNode.nextSibling.nextSibling.childNodes[5]
      playSong(nextSong);
    });
  }
  else {
    audioFile = that.parentNode.children[2];
    stopSong(audioFile);
  }
};

var playSong = function(audioFile) {
  var icon = audioFile.parentNode.children[1];
  icon.classList.remove('fa-play');
  icon.classList.add('fa-stop');
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
  var icon = audioFile.parentNode.children[1];
  icon.classList.remove('fa-stop');
  icon.classList.add('fa-play');
  audioFile.currentTime = 0;
  audioFile.pause();
  title.innerHTML = 'Select a song!';
};

var populateTitle = function(audioFile) {
  title.innerHTML = 'Now Playing: <em>' + audioFile.dataset.title + '</em>';
};

playOrStopAudio();
pauseAudio();
