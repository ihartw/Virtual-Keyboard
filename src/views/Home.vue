<template>
<div class="container">
  <h1 class="center-align">Virtual Keyboard</h1>
  <div class="row"></div>
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
        <div class="speaker z-depth-2"></div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=cSharp v-on:mouseup=cSharpStop v-bind:class="{ minorKeyActive: cSharpIsActive }">
          <audio v-if="synthOn === false" id="cSharpAudio" src="../assets/audio/c_sharp.mp3"></audio>
          <audio v-else id="cSharpAudio" src="../assets/audio/c_sharp_synth.mp3"></audio>
          <p class="minor-note-label">C#<br>Db</p>
        </div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=dSharp v-on:mouseup=dSharpStop v-bind:class="{ minorKeyActive: dSharpIsActive }">
          <audio v-if="synthOn === false" id="dSharpAudio" src="../assets/audio/d_sharp.mp3"></audio>
          <audio v-else id="dSharpAudio" src="../assets/audio/d_sharp_synth.mp3"></audio>
          <p class="minor-note-label">D#<br>Eb</p>
        </div>
      </div>
      <div class="col s1"></div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=fSharp v-on:mouseup=fSharpStop v-bind:class="{ minorKeyActive: fSharpIsActive }">
          <audio v-if="synthOn === false" id="fSharpAudio" src="../assets/audio/f_sharp.mp3"></audio>
          <audio v-else id="fSharpAudio" src="../assets/audio/f_sharp_synth.mp3"></audio>
          <p class="minor-note-label">F#<br>Gb</p>
        </div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=gSharp v-on:mouseup=gSharpStop v-bind:class="{ minorKeyActive: gSharpIsActive }">
          <audio v-if="synthOn === false" id="gSharpAudio" src="../assets/audio/g_sharp.mp3"></audio>
          <audio v-else id="gSharpAudio" src="../assets/audio/g_sharp_synth.mp3"></audio>
          <p class="minor-note-label">G#<br>Ab</p>
        </div>
      </div>
      <div class="col s1">
        <div class="minor-key" v-on:mousedown=aSharp v-on:mouseup=aSharpStop v-bind:class="{ minorKeyActive: aSharpIsActive }">
          <audio v-if="synthOn === false" id="aSharpAudio" src="../assets/audio/a_sharp.mp3"></audio>
          <audio v-else id="aSharpAudio" src="../assets/audio/a_sharp_synth.mp3"></audio>
          <p class="minor-note-label">A#<br>Bb</p>
        </div>
      </div>
      <div class="col s3">
        <div class="speaker z-depth-2"></div>
      </div>
    </div>

    <!-- Major Keys -->
    <div class="row">
      <div class="col s2"></div>
      <div class="col s1 major-key" v-on:mousedown=c3 v-on:mouseup=c3Stop v-bind:class="{ active: cIsActive }">
        <audio v-if="synthOn === false" id="c3Audio" src="../assets/audio/c.mp3"></audio>
        <audio v-else id="c3Audio" src="../assets/audio/c3_synth.mp3"></audio>
        <p class="major-note-label">C3</p>
      </div>
      <div class="col s1 major-key" v-on:mousedown=d3 v-on:mouseup=d3Stop v-bind:class="{ active: dIsActive }">
        <audio v-if="synthOn === false" id="d3Audio" src="../assets/audio/d.mp3"></audio>
        <audio v-else id="d3Audio" src="../assets/audio/d_synth.mp3"></audio>
        <p class="major-note-label">D3</p>
      </div>
      <div class="col s1 major-key" v-on:mousedown=e3 v-on:mouseup=e3Stop v-bind:class="{ active: eIsActive }">
        <audio v-if="synthOn === false" id="e3Audio" src="../assets/audio/e.mp3"></audio>
        <audio v-else id="e3Audio" src="../assets/audio/e_synth.mp3"></audio>
        <p class="major-note-label">E3</p>
      </div>
      <div class="col s1 major-key" v-on:mousedown=f3 v-on:mouseup=f3Stop v-bind:class="{ active: fIsActive }">
        <audio v-if="synthOn === false" id="f3Audio" src="../assets/audio/f.mp3"></audio>
        <audio v-else id="f3Audio" src="../assets/audio/f_synth.mp3"></audio>
        <p class="major-note-label">F3</p>
      </div>
      <div class="col s1 major-key" v-on:mousedown=g3 v-on:mouseup=g3Stop v-bind:class="{ active: gIsActive }">
        <audio v-if="synthOn === false" id="g3Audio" src="../assets/audio/g.mp3"></audio>
        <audio v-else id="g3Audio" src="../assets/audio/g_synth.mp3"></audio>
        <p class="major-note-label">G3</p>
      </div>
      <div class="col s1 major-key" v-on:mousedown=a3 v-on:mouseup=a3Stop v-bind:class="{ active: aIsActive }">
        <audio v-if="synthOn === false" id="a3Audio" src="../assets/audio/a.mp3"></audio>
        <audio v-else id="a3Audio" src="../assets/audio/a_synth.mp3"></audio>
        <p class="major-note-label">A3</p>
      </div>
      <div class="col s1 major-key" v-on:mousedown=b3 v-on:mouseup=b3Stop v-bind:class="{ active: bIsActive }">
        <audio v-if="synthOn === false" id="b3Audio" src="../assets/audio/b.mp3"></audio>
        <audio v-else id="b3Audio" src="../assets/audio/b_synth.mp3"></audio>
        <p class="major-note-label">B3</p>
      </div>
      <div class="col s1 major-key" v-on:mousedown=c4 v-on:mouseup=c4Stop v-bind:class="{ active: c4IsActive }">
        <audio v-if="synthOn === false" id="c4Audio" src="../assets/audio/c4.mp3"></audio>
        <audio v-else id="c4Audio" src="../assets/audio/c4_synth.mp3"></audio>
        <p class="major-note-label">C4</p>
      </div>
      <div class="col s2"></div>
    </div>
  </div>
</div>
</template>

<script>
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
      synthOn: false
    }
  },
  methods: {

    // Play audio functions
    c3: function(event) {
      var c3Audio = new Audio();
      this.c3Audio = document.getElementById('c3Audio');
      this.c3Audio.play();
    },
    c3Synth: function(event) {
      var c3SynthAudio = new Audio();
      this.c3SynthAudio = document.getElementById('c3SynthAudio');
      this.c3SynthAudio.play();
    },
    cSharp: function(event) {
      var cSharpAudio = new Audio();
      this.cSharpAudio = document.getElementById('cSharpAudio');
      this.cSharpAudio.play();
    },
    d3: function(event) {
      var d3Audio = new Audio();
      this.d3Audio = document.getElementById('d3Audio');
      this.d3Audio.play();
    },
    dSharp: function(event) {
      var dSharpAudio = new Audio();
      this.dSharpAudio = document.getElementById('dSharpAudio');
      this.dSharpAudio.play();
    },
    e3: function(event) {
      var e3Audio = new Audio();
      this.e3Audio = document.getElementById('e3Audio');
      this.e3Audio.play();
    },
    f3: function(event) {
      var f3Audio = new Audio();
      this.f3Audio = document.getElementById('f3Audio');
      this.f3Audio.play();
    },
    fSharp: function(event) {
      var fSharpAudio = new Audio();
      this.fSharpAudio = document.getElementById('fSharpAudio');
      this.fSharpAudio.play();
    },
    g3: function(event) {
      var g3Audio = new Audio();
      this.g3Audio = document.getElementById('g3Audio');
      this.g3Audio.play();
    },
    gSharp: function(event) {
      var gSharpAudio = new Audio();
      this.gSharpAudio = document.getElementById('gSharpAudio');
      this.gSharpAudio.play();
    },
    a3: function(event) {
      var a3Audio = new Audio();
      this.a3Audio = document.getElementById('a3Audio');
      this.a3Audio.play();
    },
    aSharp: function(event) {
      var aSharpAudio = new Audio();
      this.aSharpAudio = document.getElementById('aSharpAudio');
      this.aSharpAudio.play();
    },
    b3: function(event) {
      var b3Audio = new Audio();
      this.b3Audio = document.getElementById('b3Audio');
      this.b3Audio.play();
    },
    c4: function(event) {
      var c4Audio = new Audio();
      this.c4Audio = document.getElementById('c4Audio');
      this.c4Audio.play();
    },

    // Stop audio functions
    c3Stop: function(event) {
      this.c3Audio.pause();
      this.c3Audio.currentTime = 0;
      this.cIsActive = false;
    },
    c4Stop: function(event) {
      this.c4Audio.pause();
      this.c4Audio.currentTime = 0;
      this.c4IsActive = false;
    },
    cSharpStop: function(event) {
      this.cSharpAudio.pause();
      this.cSharpAudio.currentTime = 0;
      this.cSharpIsActive = false;
    },
    d3Stop: function(event) {
      this.d3Audio.pause();
      this.d3Audio.currentTime = 0;
      this.dIsActive = false;
    },
    dSharpStop: function(event) {
      this.dSharpAudio.pause();
      this.dSharpAudio.currentTime = 0;
      this.dSharpIsActive = false;
    },
    e3Stop: function(event) {
      this.e3Audio.pause();
      this.e3Audio.currentTime = 0;
      this.eIsActive = false;
    },
    f3Stop: function(event) {
      this.f3Audio.pause();
      this.f3Audio.currentTime = 0;
      this.fIsActive = false;
    },
    fSharpStop: function(event) {
      this.fSharpAudio.pause();
      this.fSharpAudio.currentTime = 0;
      this.fSharpIsActive = false;
    },
    g3Stop: function(event) {
      this.g3Audio.pause();
      this.g3Audio.currentTime = 0;
      this.gIsActive = false;
    },
    gSharpStop: function(event) {
      this.gSharpAudio.pause();
      this.gSharpAudio.currentTime = 0;
      this.gSharpIsActive = false;
    },
    a3Stop: function(event) {
      this.a3Audio.pause();
      this.a3Audio.currentTime = 0;
      this.aIsActive = false;
    },
    aSharpStop: function(event) {
      this.aSharpAudio.pause();
      this.aSharpAudio.currentTime = 0;
      this.aSharpIsActive = false;
    },
    b3Stop: function(event) {
      this.b3Audio.pause();
      this.b3Audio.currentTime = 0;
      this.bIsActive = false;
    },

    toggleSynth: function(event) {
      this.synthOn = true
    }
  },
  mounted() {
    window.addEventListener('keydown', event => {
      if (event.keyCode === 68) {
        this.c3();
        this.cIsActive = true;
      };
      if (event.keyCode === 70) {
        this.d3();
        this.dIsActive = true;
      }
      if (event.keyCode === 71) {
        this.e3();
        this.eIsActive = true;
      }
      if (event.keyCode === 72) {
        this.f3();
        this.fIsActive = true;
      }
      if (event.keyCode === 74) {
        this.g3();
        this.gIsActive = true;
      }
      if (event.keyCode === 75) {
        this.a3();
        this.aIsActive = true;
      }
      if (event.keyCode === 76) {
        this.b3();
        this.bIsActive = true;
      }
      if (event.keyCode === 186) {
        this.c4();
        this.c4IsActive = true;
      }
      if (event.keyCode === 82) {
        this.cSharp();
        this.cSharpIsActive = true;
      }
      if (event.keyCode === 84) {
        this.dSharp();
        this.dSharpIsActive = true;
      }
      if (event.keyCode === 85) {
        this.fSharp();
        this.fSharpIsActive = true;
      }
      if (event.keyCode === 73) {
        this.gSharp();
        this.gSharpIsActive = true;
      }
      if (event.keyCode === 79) {
        this.aSharp();
        this.aSharpIsActive = true;
      }
    });
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
  background-color: #455a64;
  border-radius: 50px;
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
  border-radius: 4px;
  background-color: white;
}

.major-key:active {
  background-color: #cfd8dc;
}

.major-note-label {
  position: relative;
  top: 145px;
  font-size: 12px;
}

.minor-note-label {
  color: white;
  position: relative;
  top: 40px;
  font-size: 12px;
}

.minor-key {
  height: 100px;
  width: 30px;
  background: #212121;
  border-radius: 4px;
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
}
</style>
