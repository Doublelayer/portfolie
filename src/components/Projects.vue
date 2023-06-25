<template>
  <section class="project" id="portfolio">
    <ul class="project-list">
      <li>
        <div class="project-content section-content">
          <p class="section-subtitle">{{ $t("projects.section_title") }}</p>

          <h2 class="h3 section-title">{{ $t("projects.title") }}</h2>

          <p class="section-text">
            {{ $t("projects.description") }}
          </p>
        </div>
      </li>

      <!-- <li v-for="project in data" v-bind:key="project.id">
        <a :href="project.url" class="project-card">
          <figure class="card-banner">
            <img
              :src="'https://source.unsplash.com/random/?tech&' + Math.random()"
              class="w-100"
              alt="A fujifilm instant camera on a dark electric blue background."
            />

            <div class="card-content">
              <h3 class="h4 card-title">{{ project.name }}</h3>
              <time class="publish-date" datetime="2022-04">{{
                project.updated_at
              }}</time>
            </div>
          </figure>
        </a>
      </li> -->

      <li v-for="project in data" v-bind:key="project.id">
        <figure class="card">
          <img
            :src="'https://source.unsplash.com/random/?tech&' + Math.random()"
            class="thumb"
            alt="A fujifilm instant camera on a dark electric blue background."
          />
          <div class="infos">
            <h2 class="title">{{ project.name }}</h2>
            <h3 class="date">{{ project.created_at.split("T")[0] }}</h3>
            <div class="topics">
              <span class="topic" v-for="topic in project.topics"
                >{{ topic }}
              </span>
            </div>
            <hr />
            <p class="txt">
              {{ project.description }}
            </p>
            <div class="stats">
              <div class="stat">
                <img src="../assets/svg/fork.svg" />{{ project.forks }}
              </div>
              <div class="stat">
                <img src="../assets/svg/watcher.svg" />{{
                  project.stargazers_count
                }}
              </div>
              <div class="stat">
                <img src="../assets/svg/star.svg" />{{ project.watchers_count }}
              </div>
            </div>
            <a :href="project.url" class="details">Repository</a>
          </div>
        </figure>
      </li>

      <li>
        <button class="load-more">{{ $t("common.load_more") }}</button>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/Doublelayer/repos?sort=updated", {
        headers: {
          Accept: "application/vnd.github.mercy-preview+json",
        },
      })
      .then(
        (response) =>
          (this.data = response.data.map((project) => {
            return {
              id: project.id,
              name: project.name,
              url: project.html_url,
              language: project.language,
              description: project.description,
              topics: project.topics,
              updated_at: project.updated_at,
              created_at: project.created_at,
              forks: project.forks,
              stargazers_count: project.stargazers_count,
              watchers_count: project.watchers_count,
            };
          }))
      );
  },
};
</script>

<style lang="scss" scoped>
.project {
  padding-block: var(--section-padding);
}

.project-list > li {
  margin-bottom: 25px;
}

figure.card {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-12);
  box-shadow: 2px 4px 6px hsla(0, 0%, 0%, 0.2);
  height: 350px;
  margin-bottom: 25px;
  .thumb {
    width: auto;
    height: 270px;
    border-radius: 3px;
  }
  .infos {
    width: auto;
    height: 360px;
    position: relative;
    padding: 14px 24px;
    background: #fff;
    transition: 0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03);
    .title {
      position: relative;
      margin: 10px 0;
      letter-spacing: 3px;
      color: var(--scarlet);
      font-size: 1rem;
      text-transform: uppercase;
      text-shadow: 0 0 0px #32577f;
    }
    .date {
      margin-bottom: 10px;
      text-transform: uppercase;
      font-size: 0.85rem;
      color: rgba(21, 37, 54, 0.7);
    }
    .topics {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .topic {
        font-size: 0.9rem;
        display: inline-flex;
        background: #e38445a3;
        color: white;
        font-weight: bold;
        border-radius: 3px;
        padding: 6px;
      }
    }
    .txt {
      line-height: 2;
      font-size: 0.95rem;
      color: rgba(21, 37, 54, 0.7);
      opacity: 0;
      transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
    }
    .stats {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
      .stat {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.7rem;

        img {
          width: 0.7rem;
          height: auto;
        }
      }
    }
    .details {
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 10px 0;
      padding: 20px 24px;
      letter-spacing: 1px;
      color: var(--scarlet);
      font-size: 0.9rem;
      text-transform: uppercase;
      cursor: pointer;
      opacity: 0;
      transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
    }
  }
  &:hover {
    .infos {
      transform: translateY(-270px);
      .seats {
        opacity: 1;
      }
      .txt {
        opacity: 1;
      }
      .details {
        opacity: 1;
      }
      .stats {
        opacity: 1;
      }
    }
  }
}

.load-more {
  font-size: var(--fs-4);
  color: var(--raw-seinna);
  text-decoration: underline;
  margin-inline: auto;
}
@media (min-width: 550px) {
  .project-list {
    column-count: 2;
    column-gap: 25px;

    > li:first-child {
      column-span: all;
    }
  }
}

@media (min-width: 992px) {
  .project-list {
    column-count: 3;

    > li:first-child {
      column-span: unset;
      margin: 25px;
      margin-left: 0;
    }
  }
}
</style>
