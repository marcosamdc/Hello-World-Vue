<template>
  <v-container>
    <h1 class="mb-4">Kennisbank</h1>

    <v-row dense>
      <v-col
        v-for="doc in knowledgeBase"
        :key="doc.id"
        cols="12"
      >
        <v-card
          class="pa-4 hoverable"
          @click="openDocument(doc.link)"
          elevation="2"
        >
          <v-card-title class="text-h6">
            {{ doc.title }}
          </v-card-title>
          <v-card-subtitle class="text-caption">
            {{ doc.description }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Terug naar dashboard knop -->
    <v-btn class="mt-6" color="primary" @click="goToDashboard">
      Terug naar Dashboard
    </v-btn>
  </v-container>
</template>

<script>
  import inspectierichtlijnen from '@/assets/guidelines/inspectierichtlijnen.pdf'
  import onderhoudsnormen from '@/assets/guidelines/onderhoudsnormen.pdf'
  import testprocedures from '@/assets/guidelines/testprocedures.pdf'

  export default {
    data() {
      return {
        knowledgeBase: [
          { id: 1, title: 'Inspectierichtlijnen', description: 'Procedures voor eigendomsinspecties', link: inspectierichtlijnen },
          { id: 2, title: 'Onderhoudsnormen', description: 'Documentatie voor vastgoedonderhoud', link: onderhoudsnormen },
          { id: 3, title: 'Testprocedures', description: 'PDF-handleiding voor technische inspecties', link: testprocedures }
        ]
      }
    },
    methods: {
      goToDashboard() {
        this.$router.push({ name: 'dashboard' })
      },
      openDocument(link) {
        if (link) {
          window.open(link, '_blank')
        } else {
          alert('Document not available yet.')
        }
      }
    }
  }
</script>

<style scoped>
  .hoverable {
    transition: box-shadow 0.3s, background-color 0.3s;
    cursor: pointer;
  }

  .hoverable:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
</style>
