<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link :to="{name: 'Landingpage'}" class="navbar-brand"> Menu - Menu IN </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto" style="letter-spacing: 2px;">
          <li class="nav-item">
            <router-link :to="{name: 'Home'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="col-xs-6">
            <button v-if="isLogin" @click="logout" class="btn btn-info btn-sm my-2 my-sm-0" type="button">Sign Out</button>
          </div>
          <div class="col-xs-4">
          <router-link :to="{name: 'Signup'}" type="button" class="btn btn-outline-info btn-sm btn-link" style="text-decoration: none; margin-right: 10%;" >Sign Up</router-link>
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
      this.$router.push({ name: 'Landingpage' })
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 15px;
}
</style>
