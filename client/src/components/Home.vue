<template>
  <div>
    <h1>ini Homes</h1>
    <div id="app">
      <div v-if="!image">
        <h2>Select an image</h2>
        <input type="file" @change="onFileChange">
      </div>
      <div v-else>
        <img :src="image" width="500px"/>
        <button @click="removeImage">Remove image</button>
      </div>
      <div>
        <button type="button" @click="uploadImage">Upload Image</button>
      </div>
    </div>
    <Foodlist/>
  </div>
</template>

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
      fileUpload: ''
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
    },
    uploadImage () {
      // console.log(this.fileUpload[0]);
      let data = new FormData()
      data.append('image', this.fileUpload[0])
      axios.post('http://localhost:3000/images', data)
      .then(response => {
        console.log(response.data.foodName, 'hoi');
        axios.get(`http://localhost:3000/walmart/search?q=${response.data.foodName}`)
        .then(result => {
          console.log(response.data)
          console.log(result.data)
        })
        .catch(err => {
          console.error(err)
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
