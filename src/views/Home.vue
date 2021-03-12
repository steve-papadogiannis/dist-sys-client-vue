<template>
  <div id="root">
    <GmapMap
      id="googleMap"
      :center="{ lat: 38.05629563288619, lng: 23.80496830013357 }"
      :zoom="15"
      @rightclick="mapRightClick"
      map-type-id="terrain"
      style="width: 100%; height: 500px"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        @rightclick="markerRightClick(index)"
      />

      <GmapPolyline :path="this.results" />
    </GmapMap>
    <button
      type="submit"
      value="Get Directions"
      style="width: 200px; height:60px"
      @click="submit"
    >
      <span>Get Directions</span>
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex/dist/vuex.mjs";

export default {
  name: "Home",
  data() {
    return {
      markers: []
    };
  },
  computed: {
    ...mapState(["results"])
  },
  methods: {
    mapRightClick(event) {
      if (this.markers.length === 2) {
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
      this.markers.splice(index, 1);
    },
    submit() {
      if (this.markers.length === 2) {
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
      }
    },
    ...mapActions(["getDirections"])
  }
};
</script>
