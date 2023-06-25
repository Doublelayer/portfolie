<template>
  <section class="about" id="about">
    <figure class="about-banner">
      <img
        src="../assets/images/about-banner.png"
        alt="A man in a alice blue shirt with a thinking expression"
        class="w-100"
      />
    </figure>

    <div class="about-content section-content">
      <p class="section-subtitle">{{ $t("about.subTitle") }}</p>

      <h2 class="h3 section-title break-spaces">{{ $t("about.title") }}</h2>

      <p class="section-text">
        {{ $t("about.description") }}
      </p>

      <div class="btn-group">
        <a href="#contact" class="btn btn-primary"
          >{{ $t("about.cta_primary") }}
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.about {
  padding-block: var(--section-padding);
}

.about-banner {
  max-width: 400px;
  margin-inline: auto;
  margin-bottom: 80px;
}

.about {
  .btn {
    max-width: unset;
    width: 100%;
  }

  .btn-secondary {
    margin-bottom: 10px;
  }
}

@media (min-width: 550px) {
  /**
   * REUSED STYLE
   */

  .container {
    max-width: 550px;
    margin-inline: auto;
  }

  .section-title {
    max-width: 380px;
  }
}

/**
 * responsive for larger than 768px screen
 */

@media (min-width: 768px) {
  .btn-group {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }

  .about {
    .btn {
      max-width: max-content;
    }

    .btn-secondary {
      margin-bottom: 0;
    }
  }
}

@media (min-width: 992px) {
  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 30px;
  }

  .about-banner {
    margin-bottom: 0;
  }
}

@media (min-width: 1200px) {
  .about-banner {
    max-width: 450px;
  }
}
</style>
