// Happy Birthday surprise — vanilla JS
(function () {
  var intro = document.getElementById("gift-intro");
  var openButton = document.getElementById("open-button");
  var openButtonLabel = document.getElementById("open-button-label");
  var introText = document.getElementById("intro-text");
  var celebration = document.getElementById("celebration");

  var song = document.getElementById("song");
  var songCard = document.getElementById("song-card");
  var musicButton = document.getElementById("music-button");
  var iconPlay = document.getElementById("icon-play");
  var iconPause = document.getElementById("icon-pause");
  var songSubtitle = document.getElementById("song-subtitle");

  var letterButton = document.getElementById("letter-button");
  var letterButtonLabel = document.getElementById("letter-button-label");
  var letter = document.getElementById("love-letter");
  var letterOpen = false;

  function playSong() {
    song.play().then(function () {
      songSubtitle.textContent = "A little birthday melody · just for you";
    }).catch(function () {
      songSubtitle.textContent = "Tap play to try again";
    });
  }

  function makeConfetti() {
    for (var i = 0; i < 40; i++) {
      var piece = document.createElement("i");
      piece.style.setProperty("--i", i);
      celebration.appendChild(piece);
    }
    setTimeout(function () { celebration.innerHTML = ""; }, 5000);
  }

  openButton.addEventListener("click", function () {
    var isOpen = intro.classList.toggle("is-open");
    if (isOpen) {
      openButtonLabel.textContent = "Open it all over again";
      introText.textContent = "You make my world a little more beautiful, every day.";
      playSong();
      makeConfetti();
    } else {
      openButtonLabel.textContent = "Open your surprise";
      introText.textContent = "A little world I made, just for you.";
      song.pause();
    }
  });

  musicButton.addEventListener("click", function () {
    if (song.paused) { playSong(); } else { song.pause(); }
  });

  song.addEventListener("play", function () {
    iconPlay.style.display = "none";
    iconPause.style.display = "block";
    musicButton.setAttribute("aria-label", "Pause birthday song");
    musicButton.setAttribute("title", "Pause birthday song");
    songCard.classList.add("playing");
  });
  song.addEventListener("pause", function () {
    iconPlay.style.display = "block";
    iconPause.style.display = "none";
    musicButton.setAttribute("aria-label", "Play birthday song");
    musicButton.setAttribute("title", "Play birthday song");
    songCard.classList.remove("playing");
  });

  letterButton.addEventListener("click", function () {
    letterOpen = !letterOpen;
    letter.style.display = letterOpen ? "block" : "none";
    letterButton.setAttribute("aria-expanded", letterOpen ? "true" : "false");
    letterButtonLabel.textContent = letterOpen ? "Fold the letter" : "Read the letter";
  });
})();
