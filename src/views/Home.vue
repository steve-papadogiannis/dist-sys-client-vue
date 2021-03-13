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
    <Button :value="'Get Directions'" @click="submit" />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex/dist/vuex.mjs";
import Button from "../components/Button";

export default {
  name: "Home",
  components: { Button },
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
      this.resetState();
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
      this.resetState();
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
    ...mapActions(["getDirections"]),
    ...mapMutations(["resetState"])
  }
};
</script>
