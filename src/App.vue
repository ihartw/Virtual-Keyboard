<template>
   <div id="app" v-bind:style="{ backgroundColor: pageColor }">
      <menu-items></menu-items>
      <router-view />
   </div>
</template>

<script>

import Vue2TouchEvents from 'vue2-touch-events'
import MenuItems from './components/MenuItems'

export default {
   name: 'App',
   components: {
      'menu-items': MenuItems,
   },
   data: function () {
      return {

      }
   },
   computed: {
      pageColor() {
         return this.$store.state.pageColor
      }
   }
}
</script>

<style>
#app {
   font-family: "Roboto Mono", monospace !important;
   font-optical-sizing: auto;
   font-style: normal;
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

.row {
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
}
</style>
