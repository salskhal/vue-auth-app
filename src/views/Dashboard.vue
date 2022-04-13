<template>
  <div class="about">
    <h1>You should only be able to view this while logged in</h1>
    <button @click="handleSignOut" v-if="isLogged">logout</button>
  </div>
</template>
<script>

import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"

export default{
  data(){
    return{
      isLogged: false
    }
  },
   mounted() { 
    onAuthStateChanged(getAuth(), (user) => {
      if(user){
        this.isLogged = true
      }else{
        this.isLogged = false
      }
    })
  },
  methods:{
    handleSignOut(){
      signOut(getAuth())
      .then(() => {
        this.$router.push("/login")
      })
    }
  },
 
}

// import {onMounted, ref} from "vue"
// import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"

// const isLogged = ref(false)
// let auth = getAuth
// onMounted(() => {
//   auth = getAuth
//   onAuthStateChanged(auth, (user) =>{
//     if(user){
//       isLogged.value = true
//     } else{
//       isLogged.value = false
//     }
//   })
// })

// const HandleSignOut = () =>{
//   signOut(auth).then(() => {
//     router.push("/")
//   })
// }
</script>

