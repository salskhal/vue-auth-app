<template>
  <div class="landing">
    <Nav />
    <LandingView />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import LandingView from "../components/LandingView.vue"
export default {
 components: {
    Nav,
    LandingView
  }
}
</script>

<style>
.landing{
  height: 100vh;
  display: flex;
  flex-direction: column;
}


</style>