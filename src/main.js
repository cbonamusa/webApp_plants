import Vue from "vue";
import './plugins/vuetify';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyDwfSP_ZPtjcn9SkJDlM3LOvaFJRq1HxDE",
      authDomain: "plantuari.firebaseapp.com",
      databaseURL: "https://plantuari.firebaseio.com",
      projectId: "plantuari",
      storageBucket: "",
      messagingSenderId: "766333628570",
      appId: "1:766333628570:web:0b18f0cca22825f7",
    };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    this.$store.dispatch("getJson");
    //call firebaseUi from store
    // this.$store.dispatch("createUI")

    firebase.auth().onAuthStateChanged(user => { //hacemos esto para que al recargar no se desconecte el user
      if (user) {
        console.log("Hay usuario");
        this.$store.commit("setUsers", firebase.auth().currentUser);
      } else {
        console.log("No user")
        this.$store.commit("setUsers", null);

      }
    })


  },

}).$mount("#app")