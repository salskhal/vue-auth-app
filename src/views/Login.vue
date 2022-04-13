<template>
  <!-- <form class="login-view">
    <h1>Login</h1>
    <input type="email" placeholder="Enter your email" v-model="email" /> <br />
    <input
      :type="isShown ? 'text' : 'password'"
      placeholder="Enter your password"
      v-model="password"
      ref="password"
    />
    <button @click.prevent="togglePassword">Show pass</button> <br />
    <button @click.prevent="Login">Login</button>
  </form> -->

  <div class="login-page">
    <div class="form">
      <form class="login-form">
        <input type="email" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="password" v-model="password"/>
        <button @click.prevent="Login">login</button>
        <p class="message">
          Not registered?
          <router-link to="/register">create an account</router-link>
        </p>
        <p class="message"><router-link to="/">Go home</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      isShown: false,
    };
  },
  methods: {
    Login() {
      const { email, password, $router } = this;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log("SignIn succefully");
          console.log(auth.currentUser);
          $router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
    togglePassword() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style>
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #0070f3;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #60a3f0;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
</style>
