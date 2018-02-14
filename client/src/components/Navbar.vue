<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" style="letter-spacing: 5px;" href="#"> REST-O </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto" style="letter-spacing: 2px;">
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="row col-xs-6">
          <button v-if="isLogin" @click="signout" class="btn btn-primary btn-sm my-2 my-sm-0" type="button">Sign Out</button>
          <router-link :to="{name: 'Signup'}" type="button" class="btn btn-sm btn-link" style="text-decoration: none;" >Sign Up</router-link>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['isLogin'],
  methods: {
    logout () {
      localStorage.clear()
      this.$emit('navigasi-login', false)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped>

</style>
