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

let wrapper;

beforeEach(() => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  jest.mock("axios", () => Object.assign(jest.fn(), { get: jest.fn() }));

  wrapper = shallowMount(MountedTest, {
    mocks: {
      $axios: {
        get: jest.fn().mockImplementation(() => Promise.resolve(resp)),
      },
    },
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("MountedTest.vue", () => {
  it("MountedTest axios Mounted", () => {
    expect(wrapper.wm).toBe();
  });

  it("MountedTest axios Mounted", () => {
    expect(wrapper.find("span").exists()).toBe(false);
    expect(wrapper.find("p").exists()).toBe(true);

    const firstText = wrapper.find("#first").text();
    expect(firstText).toEqual("1234");
  });
});
