<template>
  <div>
    <h3>Info Area:</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index" :class="item.type">
        [{{ item.type.toUpperCase() }}] - {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "InfoArea",
  computed: {
    ...mapGetters(["getInfoAreaItems"]),
    items: {
      get() {
        return this.getInfoAreaItems;
      }
    }
  }
};
</script>

<style scoped>
div {
  width: 100%;
}

ul {
  text-align: left;
  background: black;
  min-height: 100px;
}

li {
  padding: 10px;
}

.error {
  color: red;
}

.warning {
  color: yellow;
}

.info {
  color: green;
}
</style>
