<template>
  <v-container>
    <h1 class="mb-4">
      {{ form.status === 'Voltooid' ? 'Inspectierapport Bekijken' : 'Inspectierapport Invullen' }}
    </h1>

    <div v-if="form.status === 'Voltooid'" class="report-view">
      <p><strong>Inspectiedatum:</strong> {{ form.inspectionReportDate || '-' }}</p>
      <p><strong>Inspecteur gepland:</strong> {{ form.inspector || '-' }}</p>
      <p><strong>Inspecteur rapport:</strong> {{ form.inspectionReportInspector || '-' }}</p>
      <p><strong>Soort schade:</strong> {{ form.damageType || '-' }}</p>
      <p><strong>Beschrijving:</strong> {{ form.description || '-' }}</p>
      <p><strong>Kostenindicatie (€):</strong> {{ form.costEstimate || '-' }}</p>
      <p><strong>Modificaties nodig:</strong> {{ form.modifications ? 'Ja' : 'Nee' }}</p>
      <div v-if="form.photo" class="photo-section">
        <p><strong>Foto:</strong></p>
        <img :src="form.photo" alt="Inspectiefoto" class="inspection-photo" />
      </div>
    </div>

    <v-form v-else ref="inspectionForm">
      <v-text-field
        v-model="form.inspectionReportDate"
        label="Inspectiedatum"
        type="date"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.inspectionReportInspector"
        label="Inspecteur die rapport invult"
        required
      ></v-text-field>

      <v-select
        v-model="form.damageType"
        :items="damageTypes"
        label="Soort schade"
        required
      ></v-select>

      <v-textarea
        v-model="form.description"
        label="Beschrijving van schade"
        rows="4"
        required
      ></v-textarea>

      <v-text-field
        v-model="form.costEstimate"
        label="Kostenindicatie (€)"
      ></v-text-field>

      <v-checkbox
        v-model="form.modifications"
        label="Zijn er modificaties nodig?"
      ></v-checkbox>

      <v-file-input
        label="Upload Foto (optioneel)"
        accept="image/*"
        @change="handlePhotoUpload"
      ></v-file-input>

      <v-btn class="mt-4" color="success" @click="saveInspection">
        Inspectierapport opslaan
      </v-btn>
    </v-form>

    <v-btn class="mt-4 ml-4" color="primary" @click="goBack">
      Terug naar de vorige pagina
    </v-btn>
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
        inspectionReportDate: '',
        inspectionReportInspector: '',
        inspector: '',
        damageType: '',
        description: '',
        costEstimate: '',
        modifications: false,
        photo: null,
        status: 'Gepland'
      })

      const damageTypes = ['Waterschade', 'Brandschade', 'Stormschade', 'Vandalisme', 'Anders']

      onMounted(() => {
        if (inspectionId) {
          const inspection = store.inspections.find(i => i.id == inspectionId)
          if (inspection) {
            form.inspectionReportDate = inspection.inspectionReportDate || ''
            form.inspectionReportInspector = inspection.inspectionReportInspector || ''
            form.inspector = inspection.inspector || ''
            form.damageType = inspection.damageType || ''
            form.description = inspection.description || ''
            form.costEstimate = inspection.costEstimate || ''
            form.modifications = inspection.modifications || false
            form.photo = inspection.photo || null
            form.status = inspection.status || 'Gepland'
          }
        }
      })

      function handlePhotoUpload(event) {
        const file = event.target.files ? event.target.files[0] : null
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            form.photo = e.target.result
          }
          reader.readAsDataURL(file)
        }
      }

      function saveInspection() {
        if (inspectionId) {
          const existingInspection = store.inspections.find(i => i.id == inspectionId)
          if (existingInspection) {
            existingInspection.inspectionReportDate = form.inspectionReportDate
            existingInspection.inspectionReportInspector = form.inspectionReportInspector
            existingInspection.damageType = form.damageType
            existingInspection.description = form.description
            existingInspection.costEstimate = form.costEstimate
            existingInspection.modifications = form.modifications
            existingInspection.photo = form.photo
            existingInspection.status = 'Voltooid'

            store.updateInspection({ ...existingInspection })
            alert('Inspectierapport succesvol opgeslagen.')
          }
        } else {
          alert('Fout: Geen bestaande inspectie geselecteerd.')
        }
        history.back()
      }

      function goBack() {
        history.back()
      }

      return {
        store,
        form,
        damageTypes,
        handlePhotoUpload,
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

  .report-view {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 10px;
  }

  .photo-section {
    margin-top: 20px;
  }

  .inspection-photo {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .v-btn.bg-primary {
    margin-left: unset !important;
  }
</style>
