<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Login</v-card-title>
          <v-text-field v-model="username" label="Username" />
          <v-text-field v-model="password" label="Password" type="password" />
          <v-btn color="primary" block @click="login">Login</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        if (this.username && this.password) {
          localStorage.setItem('loggedIn', true)
          this.$router.push({ name: 'dashboard' })
        } else {
          alert('Fill in all fields')
        }
      }
    }
  }
</script>

<style scoped>
  .v-card .v-card-title {
    text-align: center;
    font-size: 30px !important;
  }

  button.v-btn {
    background-color: var(--color1) !important;
    transition: .2s ease-in-out;
  }
  button.v-btn * {
    font-weight: bold !important;
  }
  button.v-btn:hover {
    background-color: var(--color2) !important;
  }
</style>
