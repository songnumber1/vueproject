import { shallowMount } from "@vue/test-utils";
import VuexTest from "@/components/Jest/VuexTest.vue";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

describe("Vuex.vue", () => {
  let mutations;
  let getters;
  let store;
  let wrapper;

  beforeAll(() => {
    mutations = {
      setLogin: jest.fn(),
    };

    getters = {
      getIsLogin: () => "1234",
      // getIsLogin: jest.fn(),
    };

    let user = {
      namespaced: true,
      state: {},
      mutations,
      getters,
    };

    store = new Vuex.Store({
      modules: {
        user,
      },
    });

    wrapper = shallowMount(VuexTest, { store: store });
  });

  it("Vuex", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("MutationCall", () => {
    const spy = jest
      .spyOn(wrapper.vm, "MutationCall")
      .mockImplementation(() => {
        expect(spy).toHaveBeenCalledTimes(1);
      });

    wrapper.vm.MutationCall();
  });

  it("GetterCall", () => {
    wrapper.vm.GetterCall();
    expect(wrapper.vm.GetterCall).toBeDefined();
  });
});
