import { shallowMount } from "@vue/test-utils";
import Vuex from "@/components/Jest/Vuex.vue";

describe("Vuex.vue", () => {
  it("Vuex", () => {
    const wrapper = shallowMount(Vuex);

    expect(wrapper.wm).toBeTruthy();
  });
});
