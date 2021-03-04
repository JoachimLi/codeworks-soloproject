<template>
  <div>
    <div v-if="userDetails">
      <h2>{{`${userDetails.firstName} ${userDetails.lastName}`}}</h2>
      <h4>{{userDetails.email}}</h4>
      <ul>
        <li v-for="(category, index) in userDetails.categoriesToTrack" :key="index">{{JSON.parse(category).categoryName}}</li>
      </ul>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileDetails',
  props: [
    'userDetails'
  ]
}
</script>

<style lang="scss" scoped>
</style>
