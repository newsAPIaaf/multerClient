<template>
  <div class="container-fluid flx">
    <div class="bg-reg col-lg-5 col-lg-offset-6">
    <span>
      <img src="../assets/menu.png" alt=" ">
    </span>
    <form>
      <fieldset>
        <div class="form-group row" style="margin: auto;" >
          <!-- username -->
           <label for="staticUsername" class="col-sm-3 col-form-label">Username</label>
          <div class="col-sm-9 lft">
            <input v-model="formData.username" class="form-control" id="staticUsername" placeholder="Type Your Username" type="text">
          </div>
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
            <button @click="signup(formData)" type="button" class="mg btn btn-success btn-block spc">SIGN UP</button>
          </div>
        </div>
      </fieldset>
    </form>
</div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data () {
    return {
      formData: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signup (user) {
      axios.post('http://localhost:3000/users/signup', {
        username: user.username,
        email: user.email,
        password: user.password
      })
        .then(response => {
          swal({
            title: 'Thanks for Sign Up',
            text: 'You have create your account',
            icon: 'success',
            button: 'Continue'
          })
          this.formData.username = ''
          this.formData.email = ''
          this.formData.password = ''
          this.$router.push({name: 'Landingpage'})
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
  width: 75%;
  height: 63%;
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
