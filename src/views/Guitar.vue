<template>
  <div class="guitar-container animate__animated animate__fadeInLeft">
    <h4 class="center-align">Virtual Guitar</h4>
    <div class="row"></div>
    <div class="row pika-img">
      <img src="../assets/images/pikachu.gif" alt="">
    </div>
    <!-- <div class="test animate__animated" v-on:mousedown="stringPlucked = !stringPlucked" v-bind:class="{ 'animate__jello': stringPlucked }"></div> -->

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
    moveString: function(event) {
      this.wobble = true
    }
  }
}
</script>

<style>

.animate__animated.animate__fadeInLeft {
  --animate-duration: .5s;
}

.pika-img {
  margin: 100px;
}

.test {
  width: 300px;
  height: 10px;
  background-color: tomato;
  margin: 50px;
}

</style>
