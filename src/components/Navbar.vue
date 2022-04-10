<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a v-if="$store.state.config.LOGO" class="navbar-brand" href="/"
        ><img
          class="mx-3"
          :src="$store.state.config.LOGO"
          height="30"
          :alt="$t('navbar.logo')"
        />
      </a>
      <a v-else class="navbar-brand" href="/">{{ $t("navbar.logo") }}</a>
    </div>
  </nav>
</template>
<script>
import { mapActions } from "vuex";

import { RouterLink } from "vue-router";
export default {
  components: [RouterLink],
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      logout: "wallet/logout",
    }),
    logoutClick() {
      this.logout();
    },
    languageUpdated() {
      localStorage.setItem("lang", this.$i18n.locale);
    },
  },
};
</script>
