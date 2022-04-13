<template>
  <nav>
    <div class="logo">
      <h2>cyBER👨🏿‍💻</h2>
    </div>
    <div class="links">
    <Btn link="/login" theme="login" msg="Login"/>
    <Btn link="/register" theme="register" msg="Register"/>

    <!-- <router-link to="/dashboard">Dashboard</router-link>    -->
    </div>
  </nav>
</template>
<script>
import Btn from "./Btn.vue"
export default {
  components:{
    Btn
  }
}
</script>


<style >
  nav{
    padding: 15px 40px  ;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--dark-line);
  }

  .links{
    margin-left: auto;
  }

  nav a{
    text-decoration: none;
    margin-left: 20px;
  }

  
</style>