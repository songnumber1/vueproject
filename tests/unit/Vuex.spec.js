import { shallowMount } from "@vue/test-utils";
import Vuex from "@/components/Jest/Jest.vue";

describe("Jest.vue", () => {
  it("MountedTest axios Mounted", () => {
    const wrapper = shallowMount(Vuex);

    expect(wrapper.wm).toBeTruthy();
  });
});
