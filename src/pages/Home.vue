<script>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Stats from "@/components/Stats.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      activeTheme: localStorage.getItem("theme") || "dark_theme",
      scrollingClass: "",
    };
  },
  components: {
    Header,
    Hero,
    Stats,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
  },
  methods: {
    handleScroll() {
      this.scrollingClass = window.scrollY >= 10 ? "active" : "";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    document.body.classList.add(this.activeTheme);
  },
};
</script>

<template>
  <main>
    <Header :theme="activeTheme" :scrollingClass="scrollingClass" />
    <main>
      <article class="container">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </article>
    </main>
    <Footer />

    <a href="#top" class="go-top" data-go-top title="Go to Top" ref="goTopBtn">
      <ion-icon name="arrow-up"></ion-icon>
    </a>
  </main>
</template>

<style lang="scss">
:root {
  --raw-seinna: hsl(24, 74%, 58%);
  --sizzling-sunrise: hsl(51, 95%, 54%);
  --scarlet: hsl(13, 96%, 47%);
  --black: hsl(0, 0%, 0%);
  --white: hsl(0, 0%, 100%);

  --ff-saira-stencil-one: "Saira Stencil One", sans-serif;
  --ff-poppins: "Poppins", sans-serif;
  --ff-roboto: "Roboto", sans-serif;
  --fs-1: 2rem;
  --fs-2: calc(1.813rem + 1vw);
  --fs-3: calc(1.313rem + 1vw);
  --fs-4: 1.4rem;
  --fs-5: 1rem;
  --fs-6: 0.813rem;
  --fs-7: 0.75rem;
  --fw-400: 400;
  --fw-700: 700;
  --transition-1: 0.25s ease-in-out;
  --section-padding: 80px;
  --radius-4: 4px;
  --radius-12: 12px;
}

body {
  &.dark_theme {
    --bg-primary: hsl(0, 0%, 12%);
    --bg-secondary: hsl(0, 0%, 19%);
    --color-primary: hsl(0, 0%, 100%);
    --color-secondary: hsl(0, 0%, 62%);
    --card-shadow: hsla(0, 0%, 0%, 0.4);
    --input-bg: hsl(0, 0%, 16%);
    --shadow-1: 10px 10px 40px var(--card-shadow);
  }

  &.light_theme {
    --bg-primary: hsl(0, 0%, 90%);
    --bg-secondary: hsl(0, 0%, 100%);
    --color-primary: hsl(0, 0%, 12%);
    --color-secondary: hsl(0, 0%, 37%);
    --card-shadow: hsla(0, 0%, 0%, 0.1);
    --input-bg: hsl(0, 0%, 93%);
    --shadow-1: 10px 10px 40px var(--card-shadow);
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::before,
  &::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  display: block;
  color: var(--scarlet);
}

img,
time,
span,
input,
label,
select,
button,
textarea,
ion-icon {
  display: block;
}

input,
button,
select,
textarea {
  background: none;
  border: none;
  font: inherit;
}

button,
select {
  cursor: pointer;
}

input,
textarea {
  width: 100%;
}

ion-icon {
  pointer-events: none;
}

:is(a, button, select) {
  outline-color: var(--scarlet);
  outline-offset: 3px;
}

::selection {
  background: var(--color-primary);
  color: var(--bg-primary);
}

html {
  font-family: var(--ff-roboto);
  scroll-behavior: smooth;
}

body {
  background: var(--bg-primary);
  transition: var(--transition-1);

  &.active {
    overflow: hidden;
  }
}

.container {
  padding-inline: 10px;
}

.h1 {
  font-size: var(--fs-1);
  line-height: 1.2;
  font-weight: 400;
}

.h2,
.h3,
.h4 {
  color: var(--color-primary);
  font-family: var(--ff-poppins);
  line-height: 1.2;
}

.h2 {
  font-size: var(--fs-2);
}

.h3 {
  font-size: var(--fs-3);
}

.h4 {
  font-size: var(--fs-5);
}

.w-100 {
  width: 100%;
}

.btn {
  max-width: max-content;
  color: var(--color-primary);
  font-weight: var(--fw-700);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 10px 25px;
  border: 1px solid transparent;
  border-radius: var(--radius-4);
  transition: var(--transition-1);
}

.btn-primary {
  border-color: var(--color-primary);

  &:is(:hover, :focus) {
    background: var(--color-primary);
    color: var(--bg-primary);
  }
}

.btn-secondary {
  background: var(--raw-seinna);
  border-color: var(--raw-seinna);
  color: var(--black);

  &:is(:hover, :focus) {
    --raw-seinna: hsl(24, 74%, 64%);
  }
}

.section-subtitle {
  position: relative;
  color: var(--color-secondary);
  text-transform: uppercase;
  padding-bottom: 5px;
  margin-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 60px;
    height: 2px;
    background: var(--color-secondary);
  }
}

.section-title {
  max-width: 350px;
  margin-bottom: 30px;
}

.section-text {
  color: var(--color-secondary);
  line-height: 1.8;
  margin-bottom: 30px;
}

.tooltip {
  position: absolute;
  top: -40px;
  background: var(--raw-seinna);
  min-width: max-content;
  color: var(--white);
  font-size: 15px;
  font-weight: var(--fw-700);
  padding: 5px 10px;
  border-radius: var(--radius-4);
  box-shadow: var(--shadow-1);
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: var(--transition-1);
  z-index: 1;
}

main {
  overflow-x: hidden;
}

.break-spaces {
  white-space: break-spaces;
}

.go-top {
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  font-size: 20px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: var(--transition-1);
  z-index: 2;

  &.active {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }
}

@media (min-width: 550px) {
  .container {
    max-width: 550px;
    margin-inline: auto;
  }

  .section-title {
    max-width: 380px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }

  .section-title {
    max-width: 430px;
  }
}

@media (min-width: 992px) {
  :root {
    --fs-2: 3rem;
    --section-padding: 100px;
  }

  .container {
    max-width: 980px;
  }

  .section-content {
    position: relative;
    padding-left: 40px;
  }

  .section-subtitle {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(0.75turn) translateX(-100%);
    transform-origin: left top;
    margin-bottom: 0;

    &::after {
      top: 8px;
      left: auto;
      right: calc(100% + 20px);
    }
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1150px;
  }

  .section-title {
    max-width: 460px;
  }
}
</style>
