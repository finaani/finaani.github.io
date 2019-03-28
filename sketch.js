let song;

function setup() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }

}

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/lucky_dragons_-_power_melody.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}
