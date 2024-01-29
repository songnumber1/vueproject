import { shallowMount, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import MountedTest from "@/components/Jest/MountedTest.vue";

const logSpy = jest.spyOn(console, "log");

describe("MountedTest.vue", () => {
  it("MountedTest 컴포턴트 Mounted", () => {
    const wrapper = shallowMount(MountedTest);

    expect(wrapper.find("span").exists()).toBe(false);
    expect(wrapper.find("p").exists()).toBe(true);
    // expect(wrapper.find("p").text()).toBe("1234");

    const firstText = wrapper.find("#first").text();
    expect(firstText).toEqual("1234");

    const secondText = wrapper.find(".second").text();
    expect(secondText).toEqual("4321");
  });
});
