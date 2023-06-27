<template>
  <div
    ref="loader"
    class="loader"
    style="
      position: fixed;
      top: 0;
      left: 0;
      z-index: 5;
      width: 100vw;
      height: 100vh;
      background-color: #030303;
      pointer-events: all;
    "
  >
    <p class="loader__word">
      <span
        v-for="(char, key) in firstWord"
        :key="key"
        ref="loaderWord1Chars"
        class="loader__word__char"
        >{{ char }}</span
      >
    </p>
    <p class="loader__word">{{ $t("loader.1") }}<span>.</span></p>
    <p class="loader__word">{{ $t("loader.2") }}</p>
    <p class="loader__word">{{ $t("loader.3") }}</p>
    <p class="loader__word">{{ $t("loader.4") }}<span>.</span></p>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data: () => ({ firstWord: "Hi" }),
  mounted() {
    const readTime = 0.45;
    // const readTime = 0.1;
    const { loader, loaderWord1Chars } = this.$refs;
    const loaderChildren = Array.from(loader.children);

    const tl = gsap.timeline({
      delay: 0.6,
      paused: false,
      defaults: { duration: 0.65, ease: "power1.out" },
      // defaults: { duration: 0.01, ease: 'power1.out' }
    });

    tl.set(loaderChildren, {
      opacity: 0,
      filter: "blur(10px)",
    });

    for (let i = 0; i < loaderChildren.length; i++) {
      const loaderChild = loaderChildren[i];

      if (i === 0) {
        tl.set(loaderChild, { opacity: 1, filter: "blur(0px)" });
        tl.fromTo(
          loaderWord1Chars,
          { color: "#000" },
          { color: "#fff", ease: "power3.out", stagger: 0.05 }
        );
      } else {
        tl.to(loaderChild, { opacity: 1, filter: "blur(0px)" }, "-=0.125");
      }

      tl.to(loaderChild, { opacity: 0, filter: "blur(5px)" }, `+=${readTime}`);
    }

    tl.to(loader, {
      opacity: 0,
      onStart: () => {},
      onEnd: () => {
        localStorage.setItem("intro", false);
      },
    });

    tl.set(loader, { display: "none" });
  },
};
</script>

<style lang="scss" scoped>
.loader {
  text-align: center;
  background-color: #030303;
  pointer-events: all;
  color: #dfdfdf;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  left: 0;
  top: 0;

  &__word {
    font-size: 3rem;
    font-family: var(--ff-saira-stencil-one);
    transform: translate(-50%, -50%);
    position: absolute;
    line-height: 1.125;
    overflow: hidden;
    opacity: 0;
    left: 50%;
    margin: 0;
    top: 50%;

    &__char {
      display: inline-block;
    }

    &--logo {
      font-size: var(--step-4);
    }

    span {
      display: inline-block;
      color: var(--raw-seinna);
      margin-left: 2px;
    }
  }
}
</style>
