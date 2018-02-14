<template>
  <div class="container-fluid flx">
    <div class="bg-reg col-lg-5 col-lg-offset-6">
    <span>
      <img src="http://annualreport2015.ciat.cgiar.org/wp-content/uploads/2016/03/icon-food.png" alt="E-lukis">
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
            <button @click="signin(formData)" type="button" class="mg btn btn-success btn-block spc">SIGN IN</button>
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
    signin () {
      axios.post('http://localhost:3000/api/users/signin', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log('dah login', response.data)
          localStorage.setItem('authLogin', response.data.token)
          // localStorage.setItem('userId', response.data.userId)
          this.email = ''
          this.password = ''
          this.$emit('navigasi-login', true)
          // this.$router.push({name: 'Home'})
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
  margin-top: 5%;
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
  width: 35%;
  height: 50%;
  padding: 0%;
  margin: 0%
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
  margin-bottom: 5%;
}
</style>
