<template>
  
  <router-view/>
</template>



<script>

export default {
  
}
</script>



<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  min-height: 100vh;
  font-family: sans-serif;
  background-image: linear-gradient(to right top, #ffffff, #fcfcfc, #fafafa, #f7f7f7, #f5f5f5);
}

:root{
  --dark-line: #e0e0e0;
  --text-light: #515151;
}

a{
 text-decoration: none;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
