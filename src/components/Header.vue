<template>
  <header :class="scrollingClass" class="header" ref="header">
    <div class="container">
      <h1 class="h1 logo">
        <a href="#">{{ $t("common.first_name") }}<span>.</span></a>
      </h1>

      <div class="navbar-actions">
        <select
          v-model="$i18n.locale"
          @change="changeLanguage"
          name="language"
          id="lang"
        >
          <option value="de">DE</option>
          <option value="en">EN</option>
        </select>

        <button
          :class="theme"
          class="theme-btn"
          aria-label="Change Theme"
          title="Change Theme"
          data-theme-btn
          ref="themeToggleBtn"
          @click="onChangeThemeBtnClick"
        >
          <span class="icon"></span>
        </button>
      </div>

      <button
        :class="theme"
        class="nav-toggle-btn"
        aria-label="Toggle Menu"
        title="Toggle Menu"
        @click="onNavToggleBtnClick"
        ref="navToggleBtn"
      >
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
      </button>

      <nav class="navbar" ref="navbar">
        <ul class="navbar-list">
          <li>
            <a href="#home" class="navbar-link" @click="onNavLinkClick"
              >.home()</a
            >
          </li>

          <li>
            <a href="#about" class="navbar-link" @click="onNavLinkClick"
              >.about()</a
            >
          </li>

          <li>
            <a href="#skills" class="navbar-link" @click="onNavLinkClick"
              >.skills()</a
            >
          </li>

          <li>
            <a href="#portfolio" class="navbar-link" @click="onNavLinkClick"
              >.portfolio()</a
            >
          </li>

          <li>
            <a href="#contact" class="navbar-link">.contact()</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["theme", "scrollingClass"],
  methods: {
    changeLanguage(obj) {
      localStorage.setItem("language", obj.target.value);
      this.$i18n.locale = obj.target.value;
    },
    onNavLinkClick() {
      const { navbar, navToggleBtn } = this.$refs;
      this.elemToggleFunc(navbar);
      this.elemToggleFunc(navToggleBtn);
    },
    onNavToggleBtnClick() {
      const { navToggleBtn, navbar } = this.$refs;

      this.elemToggleFunc(navToggleBtn);
      this.elemToggleFunc(navbar);
      this.elemToggleFunc(document.body);
    },
    elemToggleFunc(elem) {
      elem.classList.toggle("active");
    },
    onChangeThemeBtnClick() {
      const { themeToggleBtn } = this.$refs;
      const darkTheme = "dark_theme";
      const lightTheme = "light_theme";

      if (themeToggleBtn.classList.contains(darkTheme)) {
        document.body.classList.remove(darkTheme);
        themeToggleBtn.classList.remove(darkTheme);
        document.body.classList.add(lightTheme);
        themeToggleBtn.classList.add(lightTheme);

        localStorage.setItem("theme", lightTheme);
      } else {
        document.body.classList.add(darkTheme);
        document.body.classList.remove(lightTheme);
        themeToggleBtn.classList.remove(lightTheme);
        themeToggleBtn.classList.add(darkTheme);

        localStorage.setItem("theme", darkTheme);
      }
    },
    handleCustomEvent(data) {
      console.log("Benutzerdefiniertes Event empfangen:", data);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.header {
  padding-block: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: var(--transition-1);
  z-index: 4;

  &.active {
    padding-block: 12px;
    background: var(--bg-secondary);
    box-shadow: var(--shadow-1);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
}

.logo {
  position: relative;
  min-width: 77px;
  z-index: 2;

  a {
    color: var(--color-primary);
    font-family: var(--ff-saira-stencil-one);
  }

  span {
    display: inline-block;
    color: var(--raw-seinna);
    margin-left: 2px;
  }
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;

  select {
    color: var(--color-primary);
    width: 45px;
  }

  option {
    background: var(--bg-primary);
    color: var(--color-primary);
  }
}

.theme-btn {
  padding: 4px;
  width: 48px;
  background: var(--bg-secondary);
  border-radius: 100px;
  transition: var(--transition-1);
}

.header.light_theme .theme-btn {
  background: var(--bg-primary);
}

.theme-btn {
  .icon {
    position: relative;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    box-shadow: inset 9px -6px var(--color-primary);
    transition: var(--transition-1);
  }

  &.light_theme .icon {
    left: 20px;
    box-shadow: inset 20px -20px var(--sizzling-sunrise);
  }
}

.nav-toggle-btn {
  position: relative;
  transform: rotate(-55deg);
  transition: var(--transition-1);
  z-index: 2;

  &.active {
    transform: rotate(-45deg);
  }

  span {
    width: 20px;
    height: 2px;
    background: var(--color-primary);
    margin: 5px;
    transition: var(--transition-1);
  }

  :is(.one, .three) {
    width: 10px;
  }

  .one {
    margin-left: auto;
    transform-origin: left;
  }

  .three {
    transform-origin: right;
  }

  &.active {
    .one {
      transform: rotate(90deg) translateX(-3px);
    }

    .three {
      transform: rotate(90deg) translateX(3px);
    }
  }
}

.navbar {
  position: fixed;
  background: var(--bg-secondary);
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  transition: 0.75s cubic-bezier(0.71, 0.01, 0.24, 0.99);
  transition-delay: 0.5s;
  z-index: 1;

  &.active {
    top: 0;
    visibility: visible;
    transition-delay: 0s;
  }
}

.navbar-list > li {
  margin-block: 20px;
  padding-inline: 50px;
  overflow: hidden;
}

.navbar-link {
  position: relative;
  width: max-content;
  margin-inline: auto;
  color: var(--color-primary);
  font-family: var(--ff-poppins);
  font-size: var(--fs-1);
  padding: 10px;
  transform: translateY(50px);
  transition: 0.75s cubic-bezier(0.68, -0.55, 0.27, 2);
}

.navbar.active .navbar-link {
  transform: translateY(0);
  transition-delay: 0.5s;
}

.navbar-link {
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 5px;
    width: 0;
    background: var(--raw-seinna);
    transition: var(--transition-1);
  }

  &:is(:hover, :focus)::before {
    width: 100%;
  }
}
@media (min-width: 992px) {
  .header {
    padding-block: 30px;

    &.active {
      padding-block: 15px;
    }
  }

  .navbar-actions {
    order: 1;
    margin-left: 0;
  }

  .nav-toggle-btn {
    display: none;
  }

  .navbar {
    all: unset;
  }

  .navbar-link {
    transform: translateY(0);
    font-size: unset;
    padding-inline: 5px;
  }

  .navbar-list {
    > li {
      margin: 0;
      padding: 0;
      overflow: visible;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .navbar-link::before {
    height: 2px;
  }
}
</style>
