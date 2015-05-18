var play = document.getElementsByClassName('fa-play');
var title = document.getElementById('song-title');

var playOrStop = function() {
  for(var i = 0; i <= play.length-1; i++ ) {
    play[i].addEventListener('click', function(e) {
      var that = this;
      togglePlay(that);
    });
  }
};

var togglePlay = function(that) {
  var audioFile;
  if(that.classList.contains('fa-play')) {
    that.classList.remove('fa-play');
    that.classList.add('fa-stop');
    audioFile = that.parentNode.children[1];
    playSong(audioFile);
  }
  else {
    that.classList.remove('fa-stop');
    that.classList.add('fa-play');
    audioFile = that.parentNode.children[1];
    populateTitle(audioFile);
    stopSong(audioFile);
  }
};

var playSong = function(audioFile) {
  populateTitle(audioFile);
  audioFile.play();
};

var stopSong = function(audioFile) {
  title.innerHTML = 'Select a song!';
  audioFile.pause();
};

var populateTitle = function(audioFile) {
  title.innerHTML = 'Now Playing: [' + audioFile.dataset.title + ']';
};


playOrStop();
