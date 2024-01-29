import { shallowMount } from "@vue/test-utils";
import MountedTest from "@/components/Jest/MountedTest.vue";
import axios from "axios";

const logSpy = jest.spyOn(console, "log");

jest.mock("axios");
// jest.mock("axios", () => ({
//   __esModule: true,
//   get: jest.fn(() => Promise.resolve({ data: "data" })),
//   default: jest.fn(() => Promise.resolve({ data: "data" })),
// }));

describe("MountedTest.vue", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("MountedTest 컴포턴트 Mounted", () => {
    expect(MountedTest).toBeTruthy();
  });

  it("MountedTest axios Mounted", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    jest.mock("axios", () => Object.assign(jest.fn(), { get: jest.fn() }));

    const wrapper = shallowMount(MountedTest, {
      mocks: {
        $axios: {
          get: jest.fn().mockImplementation(() => Promise.resolve(resp)),
        },
      },
    });

    expect(wrapper.wm).toBe();
  });

  it("MountedTest axios Mounted", () => {
    const users = [{ name: "Bob" }];
    const resp = { data: users };
    jest.mock("axios", () => Object.assign(jest.fn(), { get: jest.fn() }));

    const wrapper = shallowMount(MountedTest, {
      mocks: {
        $axios: {
          get: jest.fn().mockImplementation(() => Promise.resolve(resp)),
        },
      },
    });

    expect(wrapper.find("span").exists()).toBe(false);
    expect(wrapper.find("p").exists()).toBe(true);

    const firstText = wrapper.find("#first").text();
    expect(firstText).toEqual("1234");
  });
});
