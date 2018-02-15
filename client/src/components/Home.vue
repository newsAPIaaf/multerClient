<template>
  <div>
    <div id="app">
      <div v-if="!image">
        <br><br>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active">
            <h1>Menu - Menu IN</h1>
          </a>
        </div>
        <div class="list-group">
          <div class="alert alert-dismissible alert-warning">
            <h3 class="alert-heading">Unggah foto makanan kamu disini</h3>
            <div class="container">
              <div class="form-group">
                <label for="exampleInputFile"></label>
                <!-- <div class="container"> -->
                  <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" @change="onFileChange">
                <!-- </div> -->
                <small id="fileHelp" class="form-text text-muted">We will use your IP Address to determine your location.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active">
            <h1>Menu - Menu IN</h1>
          </a>
        </div>
        <div class="list-group">
          <div class="alert alert-dismissible alert-warning">
            <h3 class="alert-heading">Klik upload image untuk mencari restaurant terdekat</h3>
          </div>
        </div>
        <img :src="image" width="500px"/>
        <button @click="removeImage">Remove image</button>
      </div>
      <div>
        <button v-if="image" type="button" @click="uploadImage">Upload Image</button>
      </div>
    </div>
    <div class="list-group" v-if="min>0">
      <a href="#" class="list-group-item list-group-item-action active">
        Price Range : Rp.{{min * 13000 }} - Rp.{{max * 13000 }}
      </a>
    </div>
    <div v-if="min>0" class="list-group">
      <div class="alert alert-dismissible alert-warning">
        <h3 class="alert-heading">Restaurant near by</h3>
      </div>
    </div>
    <div class="row">
      <Foodlist v-for="c in cardData" :food="c"/>
    </div>

  </div>
</template>
/* eslint-disable */
<script>
import Foodlist from '@/components/Foodlist'
import axios from 'axios'
export default {
  components: {
    Foodlist
  },
  data () {
    return {
      image: '',
      fileUpload: '',
      cardData: [],
      min: null,
      max:null
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      this.fileUpload = files
      if (files.length > 0) {
        return this.createImage(files[0])
      }
    },
    createImage (file) {
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage (e) {
      this.image = ''
      this.min = null
      this.max = null
      this.cardData = []
    },
    uploadImage () {
      // console.log(this.fileUpload[0]);
      let data = new FormData()
      data.append('image', this.fileUpload[0])
      axios.post('http://35.186.155.38:3000/images', data)
      .then(response => {
        console.log(response.data.foodName, 'hoi');
        axios.get(`http://35.186.155.38:3000/walmart/search?q=${response.data.foodName}`)
        .then(result => {
          console.log(response.data)
          console.log(result.data)
          let arrWalmart = []
          result.data.items.forEach(item => {
            arrWalmart.push(item.salePrice)
          })
          let sortPrice = arrWalmart.sort(function(a,b){
            return a-b
          })
          let minPrice = sortPrice[0]
          let maxPrice = sortPrice[sortPrice.length-1]
          this.min = minPrice
          this.max = maxPrice
          console.log(minPrice);
          console.log(maxPrice);
          this.cardData = []
          response.data.data.restaurants.forEach(rest => {
            let foodObj = {
              address: rest.restaurant.location.address,
              averageCostForTwo: rest.restaurant.average_cost_for_two,
              name: rest.restaurant.name,
              url: rest.restaurant.url,
              thumbnail: rest.restaurant.thumb,
              user_rating: rest.restaurant.user_rating.aggregate_rating,
              min_price: minPrice,
              max_price: maxPrice
            }
            this.cardData.push(foodObj)
          })
          console.log(this.cardData);
        })
        .catch(err => {
          console.error(err)
        })
      })
      .catch(err => {
        console.log(err)
      })
    },
    checkLoginState () {
      if (!localStorage.getItem('authLogin')) {
        this.$router.push({
          name: 'Landingpage'
        })
      }
    }
  },
  mounted () {
    this.checkLoginState()
  }
}
</script>

<style>
  label {
    color: white;
  }

</style>
