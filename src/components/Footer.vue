<template>
  <footer class="footer">
    <div class="container">
      <p class="h1 logo">
        <a href="#"> Florin<span>.</span> </a>
      </p>

      <p class="copyright">Copyright &copy; {{ currentYear }}</p>
      <span>
        Made with 💚 by
        <a href="https://github.com/Doublelayer">Doublelayer</a> and inspired by
        <a href="https://github.com/codewithsadee/jack-portfolio"
          >codewithsadee</a
        >
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.footer {
  background: var(--bg-secondary);
  padding-block: 20px;
  text-align: center;
  box-shadow: var(--shadow-1);

  .logo {
    margin-bottom: 15px;
  }
  a {
    color: var(--raw-seinna) !important;
  }
}

.copyright {
  color: var(--color-secondary);
  line-height: 1.6;

  a {
    display: inline-block;
    color: var(--raw-seinna);
  }
}

@media (min-width: 992px) {
  .footer {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      margin-bottom: 0;
    }
  }
}
</style>
