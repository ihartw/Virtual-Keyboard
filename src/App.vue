<template>
  <div id="app">
    <h4 class="center-align">Virtual Keyboard</h4>
    <div class="row"></div>
    <router-view/>
  </div>
</template>

<style>
html {
  background-color: #d1c4e9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

h4 {
  font-family: 'Press Start 2P', cursive;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
