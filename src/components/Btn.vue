<template>
    <router-link :to="link" :class="theme">{{msg}}</router-link>
</template>

<script>
export default {
    props:[
        "link", "theme", "msg"
    ]
}
</script>


<style >
.register{
    padding: 10px;
    background: #0070f3;
    color: white;
    border-radius: 4px;
    font-weight: bold;
  }
  .login{
    padding: 10px;
    border-radius: 4px;
    border: 1px solid var(--dark-line);
    color: #000;
  }

</style>