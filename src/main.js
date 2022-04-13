import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// const firebaseConfig = {
//     apiKey: "AIzaSyCXUugZvJPP9TzrdPLWaMnugnXByzisID8",
//     authDomain: "vue-auth-prac.firebaseapp.com",
//     projectId: "vue-auth-prac",
//     storageBucket: "vue-auth-prac.appspot.com",
//     messagingSenderId: "498145752348",
//     appId: "1:498145752348:web:4f2e26f59e12bad8b676d9"
// };

// firebase.initializeApp(firebaseConfig)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXUugZvJPP9TzrdPLWaMnugnXByzisID8",
  authDomain: "vue-auth-prac.firebaseapp.com",
  projectId: "vue-auth-prac",
  storageBucket: "vue-auth-prac.appspot.com",
  messagingSenderId: "498145752348",
  appId: "1:498145752348:web:4f2e26f59e12bad8b676d9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
