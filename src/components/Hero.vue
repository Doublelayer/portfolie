<template>
  <section class="hero" id="home">
    <figure class="hero-banner">
      <picture>
        <source
          srcset="../assets/images/hero-banner.png"
          media="(min-width: 768px)"
        />
        <source
          srcset="../assets/images/hero-banner-md.png"
          media="(min-width: 500px)"
        />
        <img
          src="../assets/images/hero-banner-sm.png"
          alt="profile picture"
          class="w-100"
        />
      </picture>
    </figure>

    <div class="hero-content">
      <h2 class="h2 hero-title break-spaces">{{ $t("hero.title") }}</h2>
      <hr />
      <h4 class="h4 hero-subtitle">{{ $t("hero.subTitle") }}</h4>

      <a href="#contact" class="btn btn-primary">{{ $t("hero.contact") }}</a>
    </div>

    <ul class="hero-social-list">
      <li>
        <a
          href="https://www.youtube.com/@DevEmpowerment"
          class="hero-social-link"
        >
          <ion-icon name="logo-xing"></ion-icon>
          <div class="tooltip">Xing</div>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@DevEmpowerment"
          class="contact-social-link"
        >
          <div class="tooltip">Youtube</div>

          <ion-icon name="logo-youtube"></ion-icon>
        </a>
      </li>
    </ul>

    <a href="#stats" class="scroll-down">Scroll</a>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 115px;
  margin-bottom: var(--section-padding);
}

.hero-banner {
  max-width: 500px;
  width: 125%;
  margin-bottom: 30px;
}

:is(.hero-social-list, .scroll-down) {
  display: none;
}

.hero-content {
  max-width: 55%;
}

.hero-title {
  text-align: center;
  margin-bottom: 10px;
}

.hero-subtitle {
  margin-bottom: 30px;
  margin-top: 10px;
  text-align: center;
}

.hero .btn-primary {
  margin-inline: auto;
}

@media (min-width: 992px) {
  .hero {
    position: relative;
    padding-top: 0;
    height: 100vh;
  }

  .hero-banner {
    max-width: 70%;
    height: 100%;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero img {
    height: 100%;
    width: 100%;
    margin-inline: auto;
  }

  .hero-content {
    --color-primary: var(--white);
    position: absolute;
    top: 65%;
    filter: drop-shadow(2px 4px 10px var(--black));
  }

  .hero .btn-primary:is(:hover, :focus) {
    color: hsl(0, 0%, 12%);
  }

  .hero-social-list {
    display: block;
    position: absolute;
    bottom: 92px;
    left: -30px;

    &::after {
      content: "";
      position: absolute;
      bottom: -40px;
      left: 13px;
      width: 2px;
      height: 30px;
      background: var(--color-secondary);
    }
  }

  .hero-social-link {
    position: relative;
    color: var(--color-secondary);
    margin-block: 5px;
    padding: 5px;
    font-size: 18px;
    transition: var(--transition-1);

    &:is(:hover, :focus) {
      color: var(--color-primary);
    }

    .tooltip {
      --trans-x: 10px;
      left: calc(100% + 10px);
      top: 50%;
      transform: translateY(-50%) translateX(var(--trans-x));
    }

    &:is(:hover, :focus) .tooltip {
      --trans-x: 0;
      opacity: 1;
    }
  }

  .scroll-down {
    display: block;
    position: absolute;
    bottom: 80px;
    right: -30px;
    color: var(--color-secondary);
    font-size: 1.125rem;
    text-transform: uppercase;
    transform: rotate(90deg);
    transform-origin: top right;

    &::after {
      content: "";
      position: absolute;
      top: 8px;
      right: -50px;
      width: 30px;
      height: 2px;
      background: var(--color-secondary);
    }
  }
}

@media (min-width: 1200px) {
  .hero-social-list {
    left: -80px;
  }
}
</style>
