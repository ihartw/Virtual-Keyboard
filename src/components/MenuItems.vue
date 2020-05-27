<template>
  <div class="menu-items">
    <nav class="transparent z-depth-0">
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li v-on:click="bgKeyboardColorChange"><router-link to="/" class="black-text nav-link">Keyboard</router-link></li>
          <li v-on:click="bgGuitarColorChange"><router-link to="/Guitar"  class="black-text nav-link">Guitar</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'MenuItems',
  data: function() {
    return {

    }
  },
  computed: {
    pageColor() {
      return this.$store.state.pageColor
    }
  },
  methods: {
    bgGuitarColorChange: function(event) {
      this.$store.state.pageColor = '#90caf9';
    },
    bgKeyboardColorChange: function(event) {
      this.$store.state.pageColor = '#d1c4e9';
    }
  },
  created: function() {
    M.AutoInit();
  },
  mounted() {

  }
}
</script>

<style>
  .nav-link {
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
