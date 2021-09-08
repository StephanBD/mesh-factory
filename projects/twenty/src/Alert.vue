<template>
  <div ref="box" class="box"></div>
</template>
<!--******************************************-->
<script>
import { gsap } from "gsap";
export default {
  mounted() {
    const { box } = this.$refs;
    // console.log(box);
    // gsap.from(box, 1, { x: 200, duration: 90, ease: "elastic.out" });

    const timeline = gsap.timeline();
    timeline
      .to(box, { x: 200, duration: 1 })
      .to(box, { x: 1000, duration: 1 })
      .to(box, { x: 0, duration: 2 });
  },
  methods: {},
};
</script>
<!--******************************************-->
<style scope lang="scss">
.box {
  height: 60px;
  width: 60px;
  background: red;
  &:hover {
    border: 1px solid orange;
  }
}
</style>
