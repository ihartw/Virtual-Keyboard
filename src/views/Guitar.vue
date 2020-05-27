<template>
<div class="guitar-container animate__animated animate__fadeInRight">
  <h4 class="center-align">Virtual Guitar</h4>
  <div class="row"></div>
  <div class="row pika-img">
      <img src="../assets/images/pikachu.gif" alt="">
    </div>
  <!-- <p>{{stringPlucked}}</p>
  <div class="row">
    <div class="e-string animate__animated" v-on:mousedown="eGuitar" v-bind:class="{ 'animate__shakeY': stringPlucked }"></div> -->
    <!-- <audio id="eGuitarAudio" src="../assets/audio/e_guitar.mp3"></audio> -->
    <!-- <audio id="eGuitarAudio" src="../assets/audio/e_guitar.mp3"></audio>
    <img src="../assets/images/guitar.png" alt="" width="450" class="guitar-img center-align">
  </div> -->

</div>
</template>

<script>
import Vue2TouchEvents from 'vue2-touch-events'

export default {
  name: 'Guitar',
  data: function() {
    return {
      stringPlucked: false
    }
  },
  methods: {
    pluckString: function(event) {
      this.stringPlucked = true;
    },
    eGuitar: function(event) {
      var eGuitarAudio = new Audio();
      this.eGuitarAudio = document.getElementById('eGuitarAudio');
      this.eGuitarIsActive = true;
      this.stringPlucked = true;
      this.eGuitarAudio.play();
    }
  }
}
</script>

<style>
.guitar-img {
  transform: rotate(90deg);
  position: relative;
  top: -20rem;
}

.animate__animated.animate__fadeInRight {
  --animate-duration: .5s;
}

.animate__animated.animate__shakeY {
  --animate-duration: .2s;
}

.pika-img {
  margin: 100px;
}

.e-string {
  width: 300px;
  height: 10px;
  background-color: tomato;
  margin: 50px;
}
</style>
