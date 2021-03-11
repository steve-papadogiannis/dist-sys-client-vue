<template>
  <GmapMap
    :center="{ lat: 38.05629563288619, lng: 23.80496830013357 }"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 500px"
  />
</template>

<script>
export default {
  name: "Home"
};
</script>
