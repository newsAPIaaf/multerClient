<template>
    <div class="col-md-4">
      <div class="card mb-3">
        <h3 class="card-header">{{food.name }}</h3>
        <img style="height: 200px; width: 100%; display: block;" :src="food.thumbnail" alt="Card image" >
        <div class="card-body">
          <h5 class="card-title">{{food.address }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">User rating : {{food.user_rating }}</li>

        </ul>
        <div class="card-body">
          <a :href="food.url" class="card-link">Visit Restaurant</a>
        </div>

      </div>
    </div>
</template>
/* eslint-disable */
<script>
export default {
  props: ['food']
}
</script>

<style scoped>

</style>
