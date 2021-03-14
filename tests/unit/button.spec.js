import { shallowMount, createLocalVue } from "@vue/test-utils";
import Button from "@/components/Button.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Button.vue", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getShowLoading: () => false
    };

    store = new Vuex.Store({
      getters
    });
  });

  it("renders props.value when passed", () => {
    const value = "Get Directions";
    const wrapper = shallowMount(Button, {
      store,
      localVue,
      propsData: { value }
    });
    expect(wrapper.text()).toMatch(value);
  });

  it("button element is disabled when showLoading equals true", () => {
    getters = {
      getShowLoading: () => true
    };

    store = new Vuex.Store({
      getters
    });
    const wrapper = shallowMount(Button, {
      store,
      localVue
    });
    expect(wrapper.find("button").attributes()).toHaveProperty("disabled");
  });

  it("button element emits click event", () => {
    const wrapper = shallowMount(Button, {
      store,
      localVue
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});
