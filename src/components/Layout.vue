<template>
  <v-app>
    <!-- HEADER -->
    <v-app-bar app color="primary" dark flat>
      <v-row align="center" class="px-4" no-gutters>
        <v-col cols="8" class="d-flex align-center">
          <router-link to="/dashboard" class="d-flex align-center logo-link">
            <img :src="logo" alt="RealEstateCare logo" class="logo" />
          </router-link>
        </v-col>
        <v-col cols="4" class="text-right d-flex justify-end">
          <v-btn icon variant="text">
            <v-icon>mdi-bell</v-icon>
          </v-btn>
          <v-btn icon variant="text">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
          <v-btn icon variant="text" @click="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- INHOUD -->
    <v-main>
      <router-view />
    </v-main>

    <!-- FOOTER -->
    <v-bottom-navigation app color="primary" grow>
      <v-btn @click="goTo('active-task')">
        <v-icon>mdi-wrench</v-icon>
        <span>active task</span>
      </v-btn>
      <v-btn @click="goTo('search')">
        <v-icon>mdi-magnify</v-icon>
        <span>Search</span>
      </v-btn>
      <v-btn @click="goTo('info')">
        <v-icon>mdi-information</v-icon>
        <span>Information</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
  import logo from '@/assets/logo-white.png'

  export default {
    data() {
      return {
        logo
      }
    },
    methods: {
      goTo(routeName) {
        this.$router.push({ name: routeName })
      },
      logout() {
        localStorage.removeItem('loggedIn')      // Verwijder login-token
        this.$router.push({ name: 'login' })     // Stuur terug naar loginpagina
      }
    }
  }
</script>

<style scoped>
  .logo {
    max-height: 36px;
  }

  .logo-link {
    text-decoration: none;
  }
</style>
