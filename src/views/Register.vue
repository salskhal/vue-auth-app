<template>
    <!-- <form class="home">
      <h1>Regsiter</h1>
      <input type="email" placeholder="Enter your email" v-model="email" /> <br />
      <input
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
      <button @click.prevent="">Show pass</button> <br />
      <button @click.prevent="Register">Register</button>
    </form>
    <router-link to="/">Home</router-link> -->

  <div class="login-page">
    <div class="form">
      <form class="login-form">
        <input type="text" placeholder="Email " v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button @click.prevent="Register">Register</button>
        <p class="message">
          Already have an Account <router-link to="/login">Log</router-link>
        </p>
        <p class="message"><router-link to="/">Go home</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Register() {
      const { email, password, $router } = this;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log("Successfully registed");
          console.log(auth.currentUser);
          $router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
  },
};
</script>
