<template>
  <v-container>
    <h1 class="mb-4">
      {{ isNew ? 'Nieuwe Inspectie Inplannen' : 'Inspectie Bewerken' }}
    </h1>

    <v-form ref="inspectionForm">
      <v-text-field
        v-model="form.date"
        label="Datum"
        type="date"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.location"
        label="Locatie"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.inspector"
        label="Inspecteur"
        required
      ></v-text-field>

      <v-select
        v-model="form.status"
        :items="statusOptions"
        label="Status"
        required
      ></v-select>

      <v-textarea
        v-model="form.remarks"
        label="Opmerkingen"
        rows="4"
      ></v-textarea>

      <v-btn class="mt-4" color="success" @click="saveInspection">
        Inspectie opslaan
      </v-btn>

      <v-btn class="mt-4 ml-4" color="primary" @click="goBack">
        Terug naar de vorige pagina
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
  import { useInspectionStore } from '@/stores/useInspectionStore'
  import { useRoute, useRouter } from 'vue-router'
  import { reactive, onMounted } from 'vue'

  export default {
    setup() {
      const store = useInspectionStore()
      const route = useRoute()
      const router = useRouter()

      const inspectionId = route.params.id

      const form = reactive({
        date: '',
        location: '',
        inspector: '',
        status: 'Gepland',
        remarks: '',
        damageType: '',
        description: '',
        costEstimate: '',
        modifications: false,
        photo: null
      })

      const isNew = inspectionId ? false : true

      const statusOptions = ['Gepland', 'Voltooid', 'Geannuleerd', 'In uitvoering']

      onMounted(() => {
        if (inspectionId) {
          const existingInspection = store.inspections.find(i => i.id == inspectionId)
          if (existingInspection) {
            form.date = existingInspection.date || ''
            form.location = existingInspection.location || ''
            form.inspector = existingInspection.inspector || ''
            form.status = existingInspection.status || 'Gepland'
            form.remarks = existingInspection.remarks || ''
            form.damageType = existingInspection.damageType || ''
            form.description = existingInspection.description || ''
            form.costEstimate = existingInspection.costEstimate || ''
            form.modifications = existingInspection.modifications || false
            form.photo = existingInspection.photo || null
          }
        }
      })

      function saveInspection() {
        if (inspectionId) {
          const updatedInspection = {
            id: parseInt(inspectionId),
            ...form
          }
          store.updateInspection(updatedInspection)
          alert('Inspectie succesvol bijgewerkt.')
        } else {
          store.addInspection({ ...form })
          alert('Nieuwe inspectie succesvol ingepland.')
        }
        history.back()
      }

      function goBack() {
        history.back()
      }

      return {
        form,
        isNew,
        saveInspection,
        goBack,
        statusOptions
      }
    }
  }
</script>

<style scoped>
  .v-form {
    margin: 0 auto;
  }
</style>
