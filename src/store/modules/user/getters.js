export const GET_IS_LOGIN = "GET_IS_LOGIN";

export default {
  getIsLogin(state) {
    return state.isLogin;
  },

  [GET_IS_LOGIN]: (state) => state.isLogin,
};
