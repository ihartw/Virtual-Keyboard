<template>
<div class="container">
  <div class="keyboard-container z-depth-3">
    <div class="row"></div>

    <!-- Synth Toggle Button -->
    <div class="row">
      <div class="switch" v-on:mousedown="synthOn = !synthOn">
        <label>
          Piano
          <input type="checkbox">
          <span class="lever"></span>
          Synth
        </label>
      </div>

      <!-- Minor Keys -->
      <div class="col s3">
        <div class="speaker z-depth-2" v-bind:class="{ speakerBump: speakerActive }">
          <div class="speaker-inner"></div>
        </div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=cSharp v-on:mouseup=cSharpStop v-touch:start=cSharp v-touch:end=cSharpStop v-bind:class="{ minorKeyActive: cSharpIsActive }">
          <div class="key-shadow"></div>
          <audio v-if="synthOn === false" id="cSharpAudio" src="../assets/audio/c_sharp.mp3"></audio>
          <audio v-else id="cSharpAudio" src="../assets/audio/c_sharp_synth.mp3"></audio>
          <p class="minor-note-label">C#<br>Db</p>
        </div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=dSharp v-on:mouseup=dSharpStop v-touch:start=dSharp v-touch:end=dSharpStop v-bind:class="{ minorKeyActive: dSharpIsActive }">
          <div class="key-shadow"></div>
          <audio v-if="synthOn === false" id="dSharpAudio" src="../assets/audio/d_sharp.mp3"></audio>
          <audio v-else id="dSharpAudio" src="../assets/audio/d_sharp_synth.mp3"></audio>
          <p class="minor-note-label">D#<br>Eb</p>
        </div>
      </div>
      <div class="col s1"></div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=fSharp v-on:mouseup=fSharpStop v-touch:start=fSharp v-touch:end=fSharpStop v-bind:class="{ minorKeyActive: fSharpIsActive }">
          <div class="key-shadow"></div>
          <audio v-if="synthOn === false" id="fSharpAudio" src="../assets/audio/f_sharp.mp3"></audio>
          <audio v-else id="fSharpAudio" src="../assets/audio/f_sharp_synth.mp3"></audio>
          <p class="minor-note-label">F#<br>Gb</p>
        </div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=gSharp v-on:mouseup=gSharpStop v-touch:start=gSharp v-touch:end=gSharpStop v-bind:class="{ minorKeyActive: gSharpIsActive }">
          <div class="key-shadow"></div>
          <audio v-if="synthOn === false" id="gSharpAudio" src="../assets/audio/g_sharp.mp3"></audio>
          <audio v-else id="gSharpAudio" src="../assets/audio/g_sharp_synth.mp3"></audio>
          <p class="minor-note-label">G#<br>Ab</p>
        </div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=aSharp v-on:mouseup=aSharpStop v-touch:start=aSharp v-touch:end=aSharpStop v-bind:class="{ minorKeyActive: aSharpIsActive }">
          <div class="key-shadow"></div>
          <audio v-if="synthOn === false" id="aSharpAudio" src="../assets/audio/a_sharp.mp3"></audio>
          <audio v-else id="aSharpAudio" src="../assets/audio/a_sharp_synth.mp3"></audio>
          <p class="minor-note-label">A#<br>Bb</p>
        </div>
      </div>
      <div class="col s3">
        <div class="speaker z-depth-2" v-bind:class="{ speakerBump: speakerActive }">
          <div class="speaker-inner"></div>
        </div>
      </div>
    </div>

    <!-- Major Keys -->
    <div class="row">
      <div class="col s2"></div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=c3 v-on:mouseup=c3Stop v-touch:start=c3 v-touch:end=c3Stop v-bind:class="{ active: cIsActive }">
        <audio v-if="synthOn === false" id="c3Audio" src="../assets/audio/c.mp3"></audio>
        <audio v-else id="c3Audio" src="../assets/audio/c3_synth.mp3"></audio>
        <p class="major-note-label">C3</p>
      </div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=d3 v-on:mouseup=d3Stop v-touch:start=d3 v-touch:end=d3Stop v-bind:class="{ active: dIsActive }">
        <audio v-if="synthOn === false" id="d3Audio" src="../assets/audio/d.mp3"></audio>
        <audio v-else id="d3Audio" src="../assets/audio/d_synth.mp3"></audio>
        <p class="major-note-label">D3</p>
      </div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=e3 v-on:mouseup=e3Stop v-touch:start=e3 v-touch:end=e3Stop v-bind:class="{ active: eIsActive }">
        <audio v-if="synthOn === false" id="e3Audio" src="../assets/audio/e.mp3"></audio>
        <audio v-else id="e3Audio" src="../assets/audio/e_synth.mp3"></audio>
        <p class="major-note-label">E3</p>
      </div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=f3 v-on:mouseup=f3Stop v-touch:start=f3 v-touch:end=f3Stop v-bind:class="{ active: fIsActive }">
        <audio v-if="synthOn === false" id="f3Audio" src="../assets/audio/f.mp3"></audio>
        <audio v-else id="f3Audio" src="../assets/audio/f_synth.mp3"></audio>
        <p class="major-note-label">F3</p>
      </div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=g3 v-on:mouseup=g3Stop v-touch:start=g3 v-touch:end=g3Stop v-bind:class="{ active: gIsActive }">
        <audio v-if="synthOn === false" id="g3Audio" src="../assets/audio/g.mp3"></audio>
        <audio v-else id="g3Audio" src="../assets/audio/g_synth.mp3"></audio>
        <p class="major-note-label">G3</p>
      </div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=a3 v-on:mouseup=a3Stop v-touch:start=g3 v-touch:end=g3Stop v-bind:class="{ active: aIsActive }">
        <audio v-if="synthOn === false" id="a3Audio" src="../assets/audio/a.mp3"></audio>
        <audio v-else id="a3Audio" src="../assets/audio/a_synth.mp3"></audio>
        <p class="major-note-label">A3</p>
      </div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=b3 v-on:mouseup=b3Stop v-touch:start=b3 v-touch:end=b3Stop v-bind:class="{ active: bIsActive }">
        <audio v-if="synthOn === false" id="b3Audio" src="../assets/audio/b.mp3"></audio>
        <audio v-else id="b3Audio" src="../assets/audio/b_synth.mp3"></audio>
        <p class="major-note-label">B3</p>
      </div>
      <div class="col s1 major-key z-depth-2" v-on:mousedown=c4 v-on:mouseup=c4Stop v-touch:start=c4 v-touch:end=c4Stop v-bind:class="{ active: c4IsActive }">
        <audio v-if="synthOn === false" id="c4Audio" src="../assets/audio/c4.mp3"></audio>
        <audio v-else id="c4Audio" src="../assets/audio/c4_synth.mp3"></audio>
        <p class="major-note-label">C4</p>
      </div>
      <div class="col s2"></div>
    </div>
  </div>

  <div class="row"></div>

  <!-- Controls -->
  <div v-if="isMobile === false" class="row">
    <div class="col s12 m12">
      <div class="card">
        <div class="card-content">
          <h5>Keyboard Controls</h5>
          <div class="row"></div>
          <div class="row">
            <div class="col s2">
              <p><b>D</b> = C3</p>
            </div>
            <div class="col s2">
              <p><b>R</b> = C#/Db</p>
            </div>
            <div class="col s2">
              <p><b>F</b> = D3</p>
            </div>
            <div class="col s2">
              <p><b>G</b> = E3</p>
            </div>
            <div class="col s2">
              <p><b>H</b> = F3</p>
            </div>
            <div class="col s2">
              <p><b>U</b> = F#/Gb</p>
            </div>
          </div>
          <div class="row">
            <div class="col s2">
              <p><b>J</b> = G3</p>
            </div>
            <div class="col s2">
              <p><b>I</b> = G#/Ab</p>
            </div>
            <div class="col s2">
              <p><b>K</b> = A3</p>
            </div>
            <div class="col s2">
              <p><b>O</b> = A#/Bb</p>
            </div>
            <div class="col s2">
              <p><b>L</b> = B3</p>
            </div>
            <div class="col s2">
              <p><b>;</b> = C4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="row"></div>
</div>
</template>

<script>
import Vue2TouchEvents from 'vue2-touch-events'

export default {
  name: 'Home',
  data: function() {
    return {
      cIsActive: false,
      dIsActive: false,
      eIsActive: false,
      fIsActive: false,
      gIsActive: false,
      aIsActive: false,
      bIsActive: false,
      c4IsActive: false,
      cSharpIsActive: false,
      dSharpIsActive: false,
      fSharpIsActive: false,
      gSharpIsActive: false,
      aSharpIsActive: false,
      synthOn: false,
      speakerActive: false,
      window: {
        width: 0
      },
      isMobile: false
    }
  },
  methods: {
    // Play audio functions
    c3: function(event) {
      var c3Audio = new Audio();
      this.c3Audio = document.getElementById('c3Audio');
      this.cIsActive = true;
      this.speakerActive = true;
      this.c3Audio.play();
    },
    cSharp: function(event) {
      var cSharpAudio = new Audio();
      this.cSharpAudio = document.getElementById('cSharpAudio');
      this.cSharpIsActive = true;
      this.speakerActive = true;
      this.cSharpAudio.play();
    },
    d3: function(event) {
      var d3Audio = new Audio();
      this.d3Audio = document.getElementById('d3Audio');
      this.dIsActive = true;
      this.speakerActive = true;
      this.d3Audio.play();
    },
    dSharp: function(event) {
      var dSharpAudio = new Audio();
      this.dSharpAudio = document.getElementById('dSharpAudio');
      this.dSharpIsActive = true;
      this.speakerActive = true;
      this.dSharpAudio.play();
    },
    e3: function(event) {
      var e3Audio = new Audio();
      this.e3Audio = document.getElementById('e3Audio');
      this.eIsActive = true;
      this.speakerActive = true;
      this.e3Audio.play();
    },
    f3: function(event) {
      var f3Audio = new Audio();
      this.f3Audio = document.getElementById('f3Audio');
      this.fIsActive = true;
      this.speakerActive = true;
      this.f3Audio.play();
    },
    fSharp: function(event) {
      var fSharpAudio = new Audio();
      this.fSharpAudio = document.getElementById('fSharpAudio');
      this.fSharpIsActive = true;
      this.speakerActive = true;
      this.fSharpAudio.play();
    },
    g3: function(event) {
      var g3Audio = new Audio();
      this.g3Audio = document.getElementById('g3Audio');
      this.gIsActive = true;
      this.speakerActive = true;
      this.g3Audio.play();
    },
    gSharp: function(event) {
      var gSharpAudio = new Audio();
      this.gSharpAudio = document.getElementById('gSharpAudio');
      this.gSharpIsActive = true;
      this.speakerActive = true;
      this.gSharpAudio.play();
    },
    a3: function(event) {
      var a3Audio = new Audio();
      this.a3Audio = document.getElementById('a3Audio');
      this.aIsActive = true;
      this.speakerActive = true;
      this.a3Audio.play();
    },
    aSharp: function(event) {
      var aSharpAudio = new Audio();
      this.aSharpAudio = document.getElementById('aSharpAudio');
      this.aSharpIsActive = true;
      this.speakerActive = true;
      this.aSharpAudio.play();
    },
    b3: function(event) {
      var b3Audio = new Audio();
      this.b3Audio = document.getElementById('b3Audio');
      this.bIsActive = true;
      this.speakerActive = true;
      this.b3Audio.play();
    },
    c4: function(event) {
      var c4Audio = new Audio();
      this.c4Audio = document.getElementById('c4Audio');
      this.c4IsActive = true;
      this.speakerActive = true;
      this.c4Audio.play();
    },

    // Stop audio functions
    c3Stop: function(event) {
      this.c3Audio.pause();
      this.c3Audio.currentTime = 0;
      this.cIsActive = false;
      this.speakerActive = false;
    },
    c4Stop: function(event) {
      this.c4Audio.pause();
      this.c4Audio.currentTime = 0;
      this.c4IsActive = false;
      this.speakerActive = false;
    },
    cSharpStop: function(event) {
      this.cSharpAudio.pause();
      this.cSharpAudio.currentTime = 0;
      this.cSharpIsActive = false;
      this.speakerActive = false;
    },
    d3Stop: function(event) {
      this.d3Audio.pause();
      this.d3Audio.currentTime = 0;
      this.dIsActive = false;
      this.speakerActive = false;
    },
    dSharpStop: function(event) {
      this.dSharpAudio.pause();
      this.dSharpAudio.currentTime = 0;
      this.dSharpIsActive = false;
      this.speakerActive = false;
    },
    e3Stop: function(event) {
      this.e3Audio.pause();
      this.e3Audio.currentTime = 0;
      this.eIsActive = false;
      this.speakerActive = false;
    },
    f3Stop: function(event) {
      this.f3Audio.pause();
      this.f3Audio.currentTime = 0;
      this.fIsActive = false;
      this.speakerActive = false;
    },
    fSharpStop: function(event) {
      this.fSharpAudio.pause();
      this.fSharpAudio.currentTime = 0;
      this.fSharpIsActive = false;
      this.speakerActive = false;
    },
    g3Stop: function(event) {
      this.g3Audio.pause();
      this.g3Audio.currentTime = 0;
      this.gIsActive = false;
      this.speakerActive = false;
    },
    gSharpStop: function(event) {
      this.gSharpAudio.pause();
      this.gSharpAudio.currentTime = 0;
      this.gSharpIsActive = false;
      this.speakerActive = false;
    },
    a3Stop: function(event) {
      this.a3Audio.pause();
      this.a3Audio.currentTime = 0;
      this.aIsActive = false;
      this.speakerActive = false;
    },
    aSharpStop: function(event) {
      this.aSharpAudio.pause();
      this.aSharpAudio.currentTime = 0;
      this.aSharpIsActive = false;
      this.speakerActive = false;
    },
    b3Stop: function(event) {
      this.b3Audio.pause();
      this.b3Audio.currentTime = 0;
      this.bIsActive = false;
      this.speakerActive = false;
    },

    // Toggle Synth Sounds
    toggleSynth: function(event) {
      this.synthOn = true
    },

    // Tell User to Flip Screen if on Mobile Device
    handleResize() {
        this.window.width = window.innerWidth;
        if(this.window.width <= 768) {
          this.isMobile = true;
          var toastHTML = '<span>Flip your screen</span><img src="https://lh3.googleusercontent.com/proxy/VB8NP-K-y_9sDfqW2txycW-HlA-ov03zo3NHuTPs3qsbSr2BMEorcAV0ePvfTvBC8NrjqNcHu577CoWSg9ID8-I" width=150>';
          M.toast({html: toastHTML});
        }
    }
  },
  created: function() {
    // Check Users Screen Size
    window.addEventListener('load', this.handleResize);
  },
  mounted() {
    // Play Audio With Keyboard
    window.addEventListener('keydown', event => {
      if (event.keyCode === 68) {
        this.c3();
      };
      if (event.keyCode === 70) {
        this.d3();
      }
      if (event.keyCode === 71) {
        this.e3();
      }
      if (event.keyCode === 72) {
        this.f3();
      }
      if (event.keyCode === 74) {
        this.g3();
      }
      if (event.keyCode === 75) {
        this.a3();
      }
      if (event.keyCode === 76) {
        this.b3();
      }
      if (event.keyCode === 186) {
        this.c4();
      }
      if (event.keyCode === 82) {
        this.cSharp();
      }
      if (event.keyCode === 84) {
        this.dSharp();
      }
      if (event.keyCode === 85) {
        this.fSharp();
      }
      if (event.keyCode === 73) {
        this.gSharp();
      }
      if (event.keyCode === 79) {
        this.aSharp();
      }
    });
    // Stop Audio With Keyboard
    window.addEventListener('keyup', event => {
      if (event.keyCode === 68) {
        this.c3Stop();
      }
      if (event.keyCode === 70) {
        this.d3Stop();
      }
      if (event.keyCode === 71) {
        this.e3Stop();
      }
      if (event.keyCode === 72) {
        this.f3Stop();
      }
      if (event.keyCode === 74) {
        this.g3Stop();
      }
      if (event.keyCode === 75) {
        this.a3Stop();
      }
      if (event.keyCode === 76) {
        this.b3Stop();
      }
      if (event.keyCode === 186) {
        this.c4Stop();
      }
      if (event.keyCode === 82) {
        this.cSharpStop();
      }
      if (event.keyCode === 84) {
        this.dSharpStop();
      }
      if (event.keyCode === 85) {
        this.fSharpStop();
      }
      if (event.keyCode === 73) {
        this.gSharpStop();
      }
      if (event.keyCode === 79) {
        this.aSharpStop();
      }
    });
  }
}
</script>
<style>
.keyboard-container {
  background-color: #546e7a;
  border-radius: 50px;
  border: 5px solid;
}

.active {
  background-color: #cfd8dc !important;
}

.minorKeyActive {
  opacity: .5;
}

.major-key {
  height: 200px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  background-color: white;
  border-top: 5px solid #424242;
}

.major-key:active {
  background-color: #cfd8dc;
}

.major-note-label {
  position: relative;
  top: 145px;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.minor-note-label {
  color: white;
  position: relative;
  bottom: 60px;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.minor-key {
  height: 100px;
  width: 30px;
  background: #212121;
  border-radius: 5px;
  border-top: 5px solid #424242;
  position: relative;
  top: 120px;
  right: 26px;
}

.minor-key:active {
  opacity: .5;
}

label {
  color: white;
  font-size: 1.2rem;
}

.speaker {
  background-color: #212121;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: auto;
  padding: 25px;
}

.speaker-inner {
  background-color: #626262;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: auto;
  opacity: .3;
}

.speakerBump {
  transform: scale(1.05);
  transition: all .1s ease 0s;
}

.key-shadow {
  background: linear-gradient(217deg, rgb(189, 189, 189), rgb(0, 0, 0)), linear-gradient(336deg, rgb(44, 62, 80), rgb(44, 62, 80));
  margin: 5px;
  opacity: .2;
  height: 90px;
  border-radius: 5px;
}

.row {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (max-width: 768px){
  .speaker {
    width: 70px;
    height: 70px;
  }
  .speaker-inner {
    width: 20px;
    height: 20px;
  }
}
</style>
