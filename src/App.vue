<script >
 import {useLoginStore} from './stores/login'
import { storeToRefs } from "pinia";

export default {
     setup() {
      const store= useLoginStore()
      const { havePermissions } = store
      const { isLogin, user } = storeToRefs(store)
      return {isLogin, user, havePermissions}
    }
    
}
</script>

<template>
 
      <RouterLink to="/"></RouterLink>
      <RouterLink to="/home"></RouterLink>
      <RouterLink v-if="isLogin" to="/myTurns"></RouterLink>  
      <RouterLink to="/contactus"></RouterLink>
  <RouterView />
</template>

<style >
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  
  body{
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

</style>
