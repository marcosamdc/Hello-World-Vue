<template>
  <v-container class="pa-4 fill-container">
    <v-row dense justify="center">
      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('scheduled')" elevation="2">
          <v-icon size="48">mdi-bookmark-outline</v-icon>
          <div class="mt-2">Scheduled</div>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('completed')" elevation="2">
          <v-icon size="48">mdi-check-circle</v-icon>
          <div class="mt-2">Completed</div>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('knowledge')" elevation="2">
          <v-icon size="48">mdi-apps</v-icon>
          <div class="mt-2">Knowledge base</div>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card class="pa-4 text-center" @click="goTo('settings')" elevation="2">
          <v-icon size="48">mdi-cog</v-icon>
          <div class="mt-2">Settings</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
  import logo from '@/assets/logo-white.png';
  
  export default {
    data() {
      return {
        logo
      };
    },
    methods: {
      goTo(routeName) {
        this.$router.push({ name: routeName });
      }
    }
  };
  </script>
  
  <style scoped>
  .v-main {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-color: transparent;
    width: 100%;
  }
  
  .fill-container {
    height: calc(100vh - 112px); /* 64px header + 48px bottom-nav */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .v-row {
    flex: 1;
    align-items: center;
  }
  
  .v-card {
    height: 100%;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .logo {
    max-height: 36px;
  }
  </style>
  