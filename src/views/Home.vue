<template>
  <GmapMap
    id="googleMap"
    :center="{ lat: 38.05629563288619, lng: 23.80496830013357 }"
    :zoom="15"
    @rightclick="rightClick"
    map-type-id="terrain"
    style="width: 100%; height: 500px"
  >
    <GmapMarker
      v-for="(marker, index) in markers"
      :key="index"
      :position="marker.position"
      @rightclick="markerRightClick(index)"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      markers: []
    };
  },
  methods: {
    rightClick(event) {
      this.markers.push({
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        }
      });
    },
    markerRightClick(index) {
      this.markers.splice(index, 1);
    }
  }
};
</script>
