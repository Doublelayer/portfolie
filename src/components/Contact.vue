<template>
  <section class="contact" id="contact">
    <div class="contact-content section-content">
      <p class="section-subtitle">{{ $t("contact.section_title") }}</p>

      <h2 class="h3 section-title break-spaces">
        {{ $t("contact.title") }}
      </h2>

      <p class="section-text">
        {{ $t("contact.description") }}
      </p>

      <ul class="contact-list">
        <li class="contact-list-item">
          <div class="contact-item-icon">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="wrapper">
            <h3 class="h4 contact-item-title">
              {{ $t("contact.address_title") }}:
            </h3>

            <address class="contact-info">
              {{ $t("contact.address_country") }}
            </address>
          </div>
        </li>

        <li>
          <ul class="contac-social-list">
            <li>
              <a href="#" class="contact-social-link">
                <div class="tooltip">Xing</div>

                <ion-icon name="logo-xing"></ion-icon>
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
        </li>
      </ul>
    </div>

    <form action="" class="contact-form">
      <div class="form-wrapper">
        <label for="name" class="form-label">{{
          $t("contact.form.name")
        }}</label>

        <div class="input-wrapper">
          <input
            type="text"
            name="name"
            id="name"
            required
            :placeholder="$t('contact.form.name_tip')"
            class="input-field"
          />

          <ion-icon name="person-circle"></ion-icon>
        </div>
      </div>

      <div class="form-wrapper">
        <label for="email" class="form-label">{{
          $t("contact.form.email")
        }}</label>

        <div class="input-wrapper">
          <input
            type="email"
            name="email"
            id="email"
            required
            :placeholder="$t('contact.form.email_tip')"
            class="input-field"
          />

          <ion-icon name="mail"></ion-icon>
        </div>
      </div>

      <div class="form-wrapper">
        <label for="phone" class="form-label">{{
          $t("contact.form.phone")
        }}</label>

        <div class="input-wrapper">
          <input
            type="tel"
            name="phone"
            id="phone"
            :placeholder="$t('contact.form.phone')"
            class="input-field"
          />

          <ion-icon name="call"></ion-icon>
        </div>
      </div>

      <div class="form-wrapper">
        <label for="message" class="form-label">{{
          $t("contact.form.message")
        }}</label>

        <div class="input-wrapper">
          <textarea
            name="message"
            id="message"
            required
            :placeholder="$t('contact.form.message_tip')"
            class="input-field"
          ></textarea>

          <ion-icon name="chatbubbles"></ion-icon>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        {{ $t("contact.form.cta") }}
      </button>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding-block: var(--section-padding);
}

.contact-content {
  margin-bottom: 50px;
}

.contact-list-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.contact-item-icon {
  font-size: 25px;
  color: var(--color-primary);

  ion-icon {
    --ionicon-stroke-width: 40px;
  }
}

.contact-item-title {
  margin-bottom: 10px;
}

.contact-list-item .contact-info {
  color: var(--color-secondary);
  font-style: normal;
  line-height: 1.6;
  transition: var(--transition-1);
}

.contact-info:not(address):is(:hover, :focus) {
  color: var(--color-primary);
}

.contac-social-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-inline: 40px;
}

.contact-social-link {
  color: var(--color-secondary);
  position: relative;
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: var(--transition-1);

  &:is(:hover, :focus) {
    background: var(--raw-seinna);
    color: var(--white);

    .tooltip {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.contact-form {
  background: var(--bg-secondary);
  padding: 20px;
  border-radius: var(--radius-12);
  box-shadow: var(--shadow-1);
}

.form-wrapper {
  margin-bottom: 25px;
}

.form-label {
  color: var(--color-primary);
  font-size: var(--fs-7);
  font-family: var(--ff-poppins);
  margin-bottom: 8px;
  margin-left: 5px;
}

.input-wrapper {
  position: relative;
}

.input-field {
  background: var(--input-bg);
  color: var(--raw-seinna);
  padding: 10px;
  padding-left: 40px;
  border-radius: var(--radius-12);
  transition: var(--transition-1);
}

.input-wrapper ion-icon {
  position: absolute;
  top: 10px;
  left: 10px;
  color: var(--color-secondary);
  font-size: 20px;
  transition: var(--transition-1);
}

textarea.input-field {
  min-height: 60px;
  height: 120px;
  max-height: 200px;
  resize: vertical;
}

.input-field:focus {
  outline: 1px solid;

  + ion-icon {
    color: var(--raw-seinna);
  }
}

.contact .btn-primary {
  max-width: unset;
  width: 100%;
  background: var(--color-primary);
  color: var(--bg-primary);
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

@media (min-width: 768px) {
  .contact-form {
    max-width: 450px;
    margin-inline: auto;
  }
}

@media (min-width: 992px) {
  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .contact-content {
    margin-bottom: 0;
  }

  .contact-form {
    width: 100%;
  }

  .contact-list {
    margin-left: -40px;
  }
}
</style>
