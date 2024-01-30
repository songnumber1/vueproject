// jest.config.js
module.exports = {
  // (vue-cli로 설치 시 기본 세팅됨) vue-cli 테스트 환경 설정을 사용합니다
  // 주의! preset 지정 후 아래와 같이 각각 다시 설정하는 경우, 새로 설정한 내용으로 적용됩니다
  // 문제의 원인!!! preset에 주의합니다.
  // preset: "@vue/cli-plugin-unit-jest",
  moduleFileExtensions: [
    "js",
    "json",
    // 모든 vue 파일(`*.vue`)을 처리하기 위해 Jest에게 알려줍니다
    "vue",
  ],
  transform: {
    // `vue-jest`를 사용하여 모든 vue 파일(`*.vue`)을 처리합니다
    ".*\\.(vue)$": "vue-jest",
    // `babel-jest`를 사용하여 모든 js 파일(`*.js`)을 처리합니다
    ".*\\.(js)$": "babel-jest",
  },
  moduleNameMapper: {
    // 별칭 @(프로젝트/src) 사용하여 하위 경로의 파일을 맵핑합니다
    "^@/(.*)$": "<rootDir>/src/$1",
    axios: "axios/dist/node/axios.cjs",
  },
  // testMatch도 필수설정은 아닌것 같습니다
  // testMatch를 설정하지 않아도 .sepc.js나 .test.js를 알아서 찾아서 테스트해주긴 합니다.
  testMatch: [
    // __tests__ 경로 하위에 있는 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
    "**/__tests__/**/*.[jt]s?(x)",
    // 'xxx.spec' 또는 'xxx.test'라는 이름의 모든 js/ts/jsx/tsx 파일을 테스트 대상으로 지정합니다
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  // node_modules 경로 하위에 있는 모든 테스트 파일을 대상에서 제외합니다
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: false,
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
};
