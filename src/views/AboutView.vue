<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="click">click</button>
  </div>
</template>

<script>
import moment from "moment-timezone";
export default {
  name: "AboutView",

  methods: {
    click() {
      const a = moment.tz("2012-11-04 00:59:59", "America/New_York").format(); // 2012-11-04T00:59:59-04:00
      const b = moment.tz("2012-11-04 01:00:00", "America/New_York").format(); // 2012-11-04T01:00:00-04:00
      const c = moment.tz("2012-11-04 01:59:59", "America/New_York").format(); // 2012-11-04T01:59:59-04:00
      const d = moment.tz("2012-11-04 02:00:00", "America/New_York").format(); // 2012-11-04T02:00:00-05:00
      const e = moment.tz("2012-11-04 03:00:00", "America/New_York").format(); // 2012-11-04T03:00:00-05:00
      const aa = moment.tz(a, "America/New_York");
      const bb = moment.tz(b, "America/New_York");
      const cc = moment.tz(c, "America/New_York");
      const dd = moment.tz(d, "America/New_York");
      const ee = moment.tz(e, "America/New_York");

      console.log(a + " / " + aa.format());
      console.log(b + " / " + bb.format());
      console.log(c + " / " + cc.format());
      console.log(d + " / " + dd.format());
      console.log(e + " / " + ee.format());
    },
  },
};
</script>
