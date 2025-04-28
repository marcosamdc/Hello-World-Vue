<template>
  <router-view />
</template>

<script setup>
  import { useInspectionStore } from '@/stores/useInspectionStore'

  // Initialiseer inspecties zodra de app start
  const store = useInspectionStore()
  store.initializeInspections()
</script>

<style scoped>
  /* Algemene stijlen kun je hier toevoegen indien gewenst */
</style>
