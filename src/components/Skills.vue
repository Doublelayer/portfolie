<template>
  <section class="skills" id="skills">
    <div class="skills-content section-content">
      <p class="section-subtitle">{{ $t("skills.section_title") }}</p>

      <h2 class="h3 section-title">{{ $t("skills.title") }}</h2>

      <p class="section-text">
        {{ $t("skills.description") }}
      </p>

      <div class="skills-toggle" data-toggle-box>
        <button class="skill-toggle-btn active" @click="toggleSkills">
          {{ $t("skills.cta_skills") }}
        </button>

        <button class="skill-toggle-btn" @click="toggleSkills">
          {{ $t("skills.cta_tools") }}
        </button>
      </div>
    </div>

    <div class="skills-box" data-skills-box>
      <ul class="skills-list">
        <li v-for="(value, key) in skillImages" :key="key">
          <div class="skill-card">
            <div class="tooltip">{{ key }}</div>
            <div class="card-icon">
              <img :src="value" :alt="key + ' LOGO'" />
            </div>
          </div>
        </li>
      </ul>

      <ul class="tools-list">
        <li v-for="(value, key) in toolImages" :key="key">
          <div class="skill-card">
            <div class="tooltip">{{ key }}</div>
            <div class="card-icon">
              <img :src="value" :alt="key + ' LOGO'" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>  
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillImages: {},
      toolImages: {},
    };
  },
  methods: {
    toggleSkills() {
      document.querySelectorAll(".skill-toggle-btn").forEach((elem) => {
        elem.classList.toggle("active");
      });
      document.querySelector(".skills-toggle").classList.toggle("active");
      document.querySelector(".skills-box").classList.toggle("active");
    },
    extractFileName(path) {
      return path.split("/").slice(-1)[0].split(".")[0].toUpperCase();
    },
    async loadImages(target, images) {
      for (const path in images) {
        const imageModule = await images[path]();
        target[this.extractFileName(path)] = imageModule.default;
      }
    },
  },
  mounted() {
    this.loadImages(
      this.skillImages,
      import.meta.glob("../assets/images/skills/*.png")
    );
    this.loadImages(
      this.toolImages,
      import.meta.glob("../assets/images/tools/*.png")
    );
  },
};
</script>

<style lang="scss" scoped>
.skills {
  padding-block: var(--section-padding);
}

.skills-content {
  margin-bottom: 50px;
}

.skills-toggle {
  background: var(--bg-secondary);
  position: relative;
  width: max-content;
  margin-inline: auto;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 100px;
  box-shadow: var(--shadow-1);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    bottom: 5px;
    width: 50%;
    background: var(--raw-seinna);
    border-radius: 100px;
    transition: var(--transition-1);
    z-index: -1;
  }

  &.active::before {
    left: 50%;
    width: 48%;
  }
}

.skill-toggle-btn {
  color: var(--color-primary);
  font-family: var(--ff-poppins);
  padding: 5px 25px;
  transition: var(--transition-1);

  &.active {
    color: var(--white);
  }
}

.skills-box {
  &.active .skills-list,
  .tools-list {
    display: none;
  }

  .skills-list,
  &.active .tools-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    animation: fadeIn 0.5s ease-out forwards;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.skill-card {
  position: relative;
  background: var(--bg-secondary);
  width: 80px;
  height: 80px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-12);
  box-shadow: var(--shadow-1);
  cursor: help;

  &:hover .tooltip {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .skills {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
  }

  .skills-content {
    margin-bottom: 0;
  }

  .skills-toggle {
    margin-inline: 0;
  }
}
</style>
