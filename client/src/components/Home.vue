<template>
  <div>
    <h1>ini Homes</h1>
    <div id="app">
      <div v-if="!image">
        <h2>Select an image</h2>
        <input type="file" @change="onFileChange">
      </div>
      <div v-else>
        <img :src="image" />
        <button @click="removeImage">Remove image</button>
      </div>
    </div>
    <Foodlist/>
  </div>
</template>

<script>
import Foodlist from '@/components/Foodlist'
export default {
  components: {
    Foodlist
  },
  data () {
    return {
      msg: 'a',
      image: ''
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
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
    }
  }
}
</script>

<style>

</style>
