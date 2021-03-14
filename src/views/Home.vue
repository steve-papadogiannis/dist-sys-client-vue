<template>
  <div id="root">
    <GmapMap
      id="googleMap"
      :center="{ lat: lat, lng: lng }"
      :zoom="zoomLevel"
      @rightclick="mapRightClick"
      map-type-id="terrain"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        @rightclick="markerRightClick(index)"
      />
      <GmapPolyline :path="this.results" />
    </GmapMap>
    <Button :value="'Get Directions'" @click="submit" />
    <InfoArea />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex/dist/vuex.mjs";
import Button from "../components/Button";
import InfoArea from "../components/InfoArea";
import {
  ZOOM_LEVEL,
  CENTER_LNG,
  CENTER_LAT,
  MAX_NUMBER_OF_MARKERS
} from "../constants";

export default {
  name: "Home",
  components: { InfoArea, Button },
  created() {
    this.resetState();
  },
  data() {
    return {
      markers: [],
      zoomLevel: ZOOM_LEVEL,
      lat: CENTER_LAT,
      lng: CENTER_LNG
    };
  },
  computed: {
    ...mapState(["results"])
  },
  methods: {
    mapRightClick(event) {
      this.resetState();
      if (this.markers.length === MAX_NUMBER_OF_MARKERS) {
        this.markers.splice(0, 1);
      }
      this.markers.push({
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        }
      });
    },
    markerRightClick(index) {
      this.resetState();
      this.markers.splice(index, 1);
    },
    submit() {
      if (this.markers.length === MAX_NUMBER_OF_MARKERS) {
        this.storeShowLoading(true);
        const startGeoPoint = this.markers[0];
        const endGeoPoint = this.markers[1];
        this.getDirections({
          startGeoPoint: {
            latitude: startGeoPoint.position.lat,
            longitude: startGeoPoint.position.lng
          },
          endGeoPoint: {
            latitude: endGeoPoint.position.lat,
            longitude: endGeoPoint.position.lng
          }
        });
      } else {
        this.storeInfoAreaItems([
          {
            message: "You should set two markers",
            type: "warning"
          }
        ]);
      }
    },
    ...mapActions(["getDirections"]),
    ...mapMutations(["resetState", "storeShowLoading", "storeInfoAreaItems"])
  }
};
</script>

<style scoped>
#googleMap {
  width: 100%;
  height: 500px;
}
</style>
