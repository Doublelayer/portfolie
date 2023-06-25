<template>
  <section class="stats" id="stats">
    <ul class="stats-list">
      <li>
        <a href="#" class="stats-card">
          <div class="card-icon">
            <img
              src="../assets/images/stats-card_icon-1.png"
              alt="Badge icon"
            />
          </div>

          <h2 class="h2 card-title">
            7+ <strong>{{ $t("stats.card_0") }}</strong>
          </h2>

          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" class="stats-card">
          <div class="card-icon">
            <img
              src="../assets/images/stats-card_icon-2.png"
              alt="Checkmark icon"
            />
          </div>

          <h2 class="h2 card-title">
            14.080+ <strong>{{ $t("stats.card_1") }}</strong>
          </h2>

          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </li>

      <li>
        <a href="#" class="stats-card">
          <div class="card-icon">
            <img
              src="../assets/images/stats-card_icon-3.png"
              alt="Peoples rating icon"
            />
          </div>

          <h2 class="h2 card-title">
            1+n <strong>{{ $t("stats.card_2") }}</strong>
          </h2>

          <ion-icon name="chevron-forward-outline"></ion-icon>
        </a>
      </li>
    </ul>
  </section>
</template>

<style>
.stats {
  padding-block: var(--section-padding);
}

.stats-list {
  display: grid;
  gap: 30px;
}

.stats-card {
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 25px;
  border-radius: var(--radius-12);
  box-shadow: var(--shadow-1);
  transition: var(--transition-1);
}

.stats-card:is(:hover, :focus) {
  transform: translateY(-5px);
}

.stats-card .card-icon {
  background: var(--raw-seinna);
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  border-radius: 50%;
}

.stats-card .card-icon img {
  width: 70%;
  filter: invert(1);
}

.stats-card .card-title {
  width: calc(100% - 95px);
  color: var(--raw-seinna);
  text-align: center;
}

.stats-card .card-title strong {
  display: block;
  color: var(--color-primary);
  font-size: initial;
  line-height: 1.3;
  margin-top: 5px;
}

.stats-card > ion-icon {
  color: var(--color-secondary);
}

@media (min-width: 768px) {
  .stats-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 992px) {
  .stats-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .stats-card {
    height: 100%;
  }
}
</style>
