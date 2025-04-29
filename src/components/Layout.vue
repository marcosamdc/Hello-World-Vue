<template>
  <v-app>

    <!-- HEADER -->
    <v-app-bar app color="primary" dark flat>
      <v-container>
        <v-row align="center" class="justify-space-between">

          <!-- Logo -->
          <router-link to="/dashboard" class="d-flex align-center logo-link">
            <img :src="logo" alt="RealEstateCare logo" class="logo" />
          </router-link>

          <!-- Desktop Icons -->
          <div class="d-none d-md-flex">
            <v-btn icon variant="text" @click="toggleNotifications">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn icon variant="text" @click="goToSettings">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
            <v-btn icon variant="text" @click="logout">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </div>

          <!-- Hamburger Menu (mobile) -->
          <v-btn icon variant="text" class="d-md-none" @click="drawer = true">
            <v-icon>mdi-menu</v-icon>
          </v-btn>

        </v-row>
      </v-container>

      <!-- Meldingen Menu -->
      <v-menu v-model="showNotifications" offset-y>
        <template #activator="{ on, attrs }"></template>
        <v-list>
          <v-list-item v-for="(notification, index) in notifications" :key="index">
            <v-list-item-title>{{ notification }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Navigation Drawer (Hamburger) -->
    <v-navigation-drawer v-model="drawer" temporary app right>
      <v-list dense>
        <v-list-item link @click="navigate('/dashboard')">
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigate('/scheduled')">
          <v-list-item-title>Geplande Inspecties</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigate('/completed')">
          <v-list-item-title>Voltooide Inspecties</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigate('/active-tasks')">
          <v-list-item-title>Actieve Inspecties</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigate('/all-inspections')">
          <v-list-item-title>Alle Inspecties</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigate('/knowledge')">
          <v-list-item-title>Kennisbank</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigate('/info')">
          <v-list-item-title>Informatie</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="navigate('/settings')">
          <v-list-item-title>Instellingen</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- INHOUD -->
    <v-main>
      <router-view />
    </v-main>

    <!-- FOOTER (blijft hetzelfde) -->
    <v-bottom-navigation app color="primary" grow>
      <v-btn @click="goTo('active-tasks')">
        <v-icon>mdi-wrench</v-icon>
        <span>Actieve inspecties</span>
      </v-btn>

      <v-btn @click="goTo('all-inspections')">
        <v-icon>mdi-magnify</v-icon>
        <span>Alle inspecties</span>
      </v-btn>

      <v-btn @click="goTo('info')">
        <v-icon>mdi-information</v-icon>
        <span>Informatie</span>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
  import logo from '@/assets/logo-white.png'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  export default {
    setup() {
      const router = useRouter()
      const showNotifications = ref(false)
      const drawer = ref(false)

      const notifications = [
        "Onderhoud gepland: 30-04-2025",
        "Systeemupdate succesvol afgerond"
      ]

      function toggleNotifications() {
        showNotifications.value = !showNotifications.value
      }

      function goToSettings() {
        router.push({ name: 'settings' })
      }

      function goTo(routeName) {
        router.push({ name: routeName })
      }

      function navigate(path) {
        drawer.value = false
        router.push(path)
      }

      function logout() {
        localStorage.removeItem('loggedIn')
        router.push({ name: 'login' })
      }

      return {
        logo,
        showNotifications,
        toggleNotifications,
        notifications,
        drawer,
        goToSettings,
        goTo,
        navigate,
        logout
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

  .v-navigation-drawer {
    background-color: #263238;
  }

  .v-navigation-drawer {
    top: 100px !important;
    background-color: var(--color3);
  }

  .v-navigation-drawer__scrim {
    display: none;
  }
</style>
