var player;
			var lofiAudio = document.getElementById("lofiStream");
			var isPlaying = false;
			var playPauseIcon = document.querySelector("#playPauseButton i");
			var playPauseButton = document.getElementById("playPauseButton");
			var musicSelector = document.getElementById("musicSelector");
			var staticImage = document.getElementById("staticImage");
			var hideButtonTimer;
			var infoButton = document.getElementById("infoButton");
			var infoModal = document.getElementById("infoModal");
			var issTracker = document.getElementById("issTracker");
			var issButton = document.getElementById("issButton");

			// Initialize its display property to "none"
			issTracker.style.display = "none";

			function onYouTubeIframeAPIReady() {
			  player = new YT.Player('player', {
			    height: '100%',
			    width: '100%',
			    videoId: 'O9mYwRlucZY',
			    playerVars: {
			      'controls': 0,
			      'showinfo': 0,
			      'modestbranding': 1
			    },
			    events: {
			      'onReady': onPlayerReady
			    }
			  });
			}

			function onPlayerReady(event) {
			  playPauseButton.addEventListener("click", function() {
			    if (isPlaying) {
			      player.stopVideo();
			      lofiAudio.pause();
			      playPauseIcon.className = "fas fa-play";
			      staticImage.style.zIndex = 1;
			    } else {
			      player.loadVideoById('O9mYwRlucZY');
			      player.mute();
			      lofiAudio.load();
			      lofiAudio.play();
			      playPauseIcon.className = "fas fa-pause";
			      staticImage.style.zIndex = -1;
			    }
			    isPlaying = !isPlaying;
			  });

			  issButton.addEventListener("click", function() {
			    if (issTracker.style.display === "none") {
			      issTracker.style.display = "block";
			    } else {
			      issTracker.style.display = "none";
			    }
			  });

			  document.addEventListener("mousemove", function() {
			    clearTimeout(hideButtonTimer);
			    playPauseButton.style.opacity = "1";
			    musicSelector.style.opacity = "1";
			    hideButtonTimer = setTimeout(function() {
			      playPauseButton.style.opacity = "0";
			      musicSelector.style.opacity = "0";
			    }, 3000);
			  });

			  infoButton.addEventListener("click", function() {
			    infoModal.style.display = "block";
			  });
			}

			function closeInfo() {
			  infoModal.style.display = "none";
			}

			lofiAudio.src = musicSelector.value;

			musicSelector.addEventListener("change", function() {
			  var selectedMusic = musicSelector.value;
			  lofiAudio.src = selectedMusic;
			  if (isPlaying) {
			    lofiAudio.load();
			    lofiAudio.play();
			  }
			});
