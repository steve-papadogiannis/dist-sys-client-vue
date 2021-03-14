import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps.install, {
  load: {
    key: process.env.VUE_APP_API_KEY,
    libraries: "places"
  },
  installComponents: true
});

export default {};
