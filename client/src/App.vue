<template>
  <div id="app">
    <navbar @navigasi-login="checkLogin" :isLogin="login"/>
    <router-view @navigasi-login="checkLogin"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      login: false,
      isAuth: false
    }
  },
  methods: {
    checkLogin (logged) {
      if (localStorage.getItem('authLogin')) {
        this.login = logged
      } else {
        this.login = false
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style>
body {
  background-image: url('./assets/food.jpg');
  background-size:  cover;
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
