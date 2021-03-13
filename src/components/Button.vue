<template>
  <button
    type="submit"
    class="v-btn"
    style="width: 200px; height:60px"
    @click="emitClickEvent"
  >
    <span>{{ value }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    emitClickEvent() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.v-btn {
  margin: 8px;
  padding: 0 23.1111111111px;
  color: #fff;
  background-color: #42b983 !important;
  border-color: #42b983 !important;
  will-change: box-shadow;
  font-size: 1.1rem;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  -webkit-appearance: button;
  border-radius: 28px;
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  border-style: none;
  overflow: visible;
  background-repeat: no-repeat;
  box-sizing: inherit;
}
</style>
