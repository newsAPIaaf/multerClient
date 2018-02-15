<template>
  <div class="container-fluid flx">
    <div class="bg-reg col-lg-5 col-lg-offset-6">
    <span>
      <img src="../assets/menu.png" alt=" ">
    </span>
    <form>
      <fieldset>
        <div class="form-group row" style="margin: auto;" >
          <!-- email -->
          <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.email" class="form-control" id="staticEmail" placeholder="Type Your Email" type="email">
          </div>
          <!-- password -->
          <label for="staticPass" class="col-sm-3 col-form-label">Password</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.password" class="form-control" id="staticPass" placeholder="Type Your Password" type="password">
          </div>
          <!-- button sign up -->
          <div class="col-sm-12">
            <button @click="signin(formData)" type="button" class="mg btn btn-info btn-block spc">SIGN IN</button>
          </div>
        </div>
      </fieldset>
    </form>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin (user) {
      axios.post('http://localhost:3000/users/signin', {
        email: user.email,
        password: user.password
      })
        .then(response => {
          localStorage.setItem('authLogin', response.data.token)
          this.formData.email = ''
          this.formData.password = ''
          this.$emit('navigasi-login', true)
          this.$router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.flx {
  margin-top: 2%;
  display: flex;
  justify-content: flex-end;
}
.sz {
  font-size: 85%;
}
.bg-reg {
  background-color: rgba(238, 220, 220, 0.445);
  border-width: 3px;
  border-style: solid;
  border-color: rgba(87, 71, 66, 0.582);
  border-radius: 10px;
}

input {
  margin: auto;
  padding: 1.5%;
}

img {
  width: 70%;
  height: 65%;
}

label {
  color: rgba(63, 38, 38, 0.973);
  font-size: 120%;
  padding-right: 0%;
  text-align: left;
  font-weight: bold;
}

.lft {
  padding-left: 0%;
}

.spc {
  font-size: 120%;
  letter-spacing: 3px;
  font-weight: bold;
}

.mg {
  margin-top: 2%;
}
</style>
