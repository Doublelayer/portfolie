<script>
import Loader from "@/components/Loader.vue";
import Home from "@/pages/Home.vue";

export default {
  name: "app",
  data() {
    return {
      showLoader: localStorage.getItem("intro") !== "false",
    };
  },
  components: {
    Loader,
    Home,
  },
  mounted() {
    this.$i18n.locale = localStorage.getItem("language");
  },
};
</script>

<template>
  <Loader v-if="showLoader" />
  <Home />
</template>
