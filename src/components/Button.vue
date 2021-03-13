<template>
  <button
    type="submit"
    class="v-btn"
    style="width: 200px; height:60px"
    :disabled="showLoading"
    @click="emitClickEvent"
  >
    <span v-if="!showLoading">{{ value }}</span>
    <span class="v-btn__loader" v-if="showLoading">
      <div
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        class="v-progress-circular v-progress-circular--indeterminate"
        style="height: 23px; width: 23px;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
          style="transform: rotate(0deg);"
        >
          <circle
            fill="transparent"
            cx="43.80952380952381"
            cy="43.80952380952381"
            r="20"
            stroke-width="3.8095238095238093"
            stroke-dasharray="125.664"
            stroke-dashoffset="125.66370614359172px"
            class="v-progress-circular__overlay"
          ></circle>
        </svg>
        <div class="v-progress-circular__info"></div>
      </div>
    </span>
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Button",
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapGetters(["getShowLoading"]),
    showLoading: {
      get() {
        return this.getShowLoading;
      }
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

.v-btn__loader {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.v-progress-circular {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}

.v-progress-circular--indeterminate > svg {
  -webkit-animation: progress-circular-rotate 1.4s linear infinite;
  animation: progress-circular-rotate 1.4s linear infinite;
  transform-origin: center center;
  transition: all 0.2s ease-in-out;
}

.v-progress-circular > svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.v-progress-circular--indeterminate .v-progress-circular__overlay {
  -webkit-animation: progress-circular-dash 1.4s ease-in-out infinite;
  animation: progress-circular-dash 1.4s ease-in-out infinite;
  stroke-linecap: round;
  stroke-dasharray: 80, 200;
  stroke-dashoffset: 0;
}

.v-progress-circular__overlay {
  stroke: currentColor;
  z-index: 2;
  transition: all 0.6s ease-in-out;
}

@-webkit-keyframes progress-circular-rotate {
  to {
    transform: rotate(1turn);
  }
}

@keyframes progress-circular-rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>
