<template>
  <v-container>
    <h1 class="mb-4">
      {{ isNew ? 'Nieuwe Inspectie Inplannen' : 'Inspectierapport Bekijken / Bewerken' }}
    </h1>

    <v-form ref="form">
      <v-text-field
        v-model="form.date"
        label="Datum"
        type="date"
        required
        :readonly="!isNew"
      ></v-text-field>

      <v-text-field
        v-model="form.location"
        label="Locatie"
        required
        :readonly="!isNew"
      ></v-text-field>

      <v-text-field
        v-model="form.inspector"
        label="Inspecteur"
        required
        :readonly="!isNew"
      ></v-text-field>

      <v-select
        v-model="form.damageType"
        :items="damageTypes"
        label="Soort schade"
        required
        :disabled="!isNew"
      ></v-select>

      <v-textarea
        v-model="form.description"
        label="Beschrijving"
        rows="4"
        required
        :readonly="!isNew"
      ></v-textarea>

      <v-text-field
        v-model="form.costEstimate"
        label="Kostenindicatie (€)"
        :readonly="!isNew"
      ></v-text-field>

      <v-checkbox
        v-model="form.modifications"
        label="Zijn er modificaties nodig?"
        :disabled="!isNew"
      ></v-checkbox>

      <v-file-input
        v-model="form.photo"
        label="Upload Foto (optioneel)"
        accept="image/*"
        :disabled="!isNew"
      ></v-file-input>

      <!-- Alleen opslaan tonen als je nieuw invult -->
      <v-btn v-if="isNew" class="mt-4" color="success" @click="saveInspection">
        Inspectie opslaan
      </v-btn>

      <v-btn class="mt-4 ml-4" color="primary" @click="goBack">
        Terug
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { useInspectionStore } from '@/stores/useInspectionStore'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const store = useInspectionStore()
    const route = useRoute()
    const router = useRouter()

    const inspectionId = route.params.id
    const form = ref({
      date: '',
      location: '',
      inspector: '',
      damageType: '',
      description: '',
      costEstimate: '',
      modifications: false,
      photo: null,
      status: 'Gepland'
    })
    const isNew = ref(false)
    const damageTypes = ['Waterschade', 'Brandschade', 'Stormschade', 'Vandalisme', 'Anders']

    onMounted(() => {
      if (inspectionId) {
        const inspection = store.inspections.find(i => i.id == inspectionId)
        if (inspection) {
          form.value = { ...inspection }
          isNew.value = inspection.status === 'Gepland'
        }
      } else {
        isNew.value = true
      }
    })

    function saveInspection() {
      if (inspectionId) {
        // Bestaande inspectie updaten
        form.value.status = 'Voltooid'
        store.updateInspection(form.value)
      } else {
        // Nieuwe inspectie toevoegen
        store.addInspection(form.value)
      }

      alert('Inspectie succesvol opgeslagen.')
      router.push({ name: 'scheduled' })
    }

    function goBack() {
      router.push({ name: 'scheduled' })
    }

    return {
      store,
      form,
      isNew,
      damageTypes,
      saveInspection,
      goBack
    }
  }
}
</script>

<style scoped>
.v-form {
  margin: 0 auto;
}
</style>
