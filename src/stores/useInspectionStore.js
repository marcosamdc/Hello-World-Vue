import { defineStore } from 'pinia'

export const useInspectionStore = defineStore('inspection', {
  state: () => ({
    inspections: []
  }),
  actions: {
    initializeInspections() {
      const storedInspections = localStorage.getItem('inspections')
      if (storedInspections) {
        this.inspections = JSON.parse(storedInspections)
      } else {
        this.inspections = [
          {
            id: 1,
            date: '2025-04-26',
            location: 'Plutostraat 306, 2402 XK Alphen aan den Rijn',
            inspector: 'Elisangela Maria Duarte',
            status: 'Voltooid',
            remarks: 'Geen problemen gevonden.',
            inspectionReportDate: '',
            inspectionReportInspector: '',
            damageType: '',
            description: '',
            costEstimate: '',
            modifications: false,
            photo: null
          },
          {
            id: 2,
            date: '2025-01-10',
            location: 'Plutostraat 502, 2402 XK Alphen aan den Rijn',
            inspector: 'Gustavo Rocha Sousa',
            status: 'Voltooid',
            remarks: 'Minimale reparatie nodig.',
            inspectionReportDate: '',
            inspectionReportInspector: '',
            damageType: '',
            description: '',
            costEstimate: '',
            modifications: false,
            photo: null
          },
          {
            id: 3,
            date: '2025-06-15',
            location: 'Iepstraat 14, 2404 EM Alphen aan den Rijn',
            inspector: 'Chester Meurer',
            status: 'Gepland',
            remarks: 'Gepland voor volgende week',
            inspectionReportDate: '',
            inspectionReportInspector: '',
            damageType: '',
            description: '',
            costEstimate: '',
            modifications: false,
            photo: null
          },
          {
            id: 4,
            date: '2025-07-20',
            location: 'Koninginneweg 301, 2411XS Bodegraven',
            inspector: 'Ruskaya Duarte de Castro',
            status: 'Gepland',
            remarks: 'Opvolging vereist voor elektrische problemen.',
            inspectionReportDate: '',
            inspectionReportInspector: '',
            damageType: '',
            description: '',
            costEstimate: '',
            modifications: false,
            photo: null
          },
          {
            id: 5,
            date: '2024-11-30',
            location: 'Plutostraat 105, 2402 XK Alphen aan den Rijn',
            inspector: 'Jeroen Verlaan',
            status: 'Geannuleerd',
            remarks: 'Inspectie geannuleerd door klant.',
            inspectionReportDate: '',
            inspectionReportInspector: '',
            damageType: '',
            description: '',
            costEstimate: '',
            modifications: false,
            photo: null
          },
          {
            id: 6,
            date: '2025-04-15',
            location: 'Koninginneweg 250, 2411XS Bodegraven',
            inspector: 'Lars van Dongen',
            status: 'In uitvoering',
            remarks: 'Inspectie gestart, in afwachting van het eindrapport.',
            inspectionReportDate: '',
            inspectionReportInspector: '',
            damageType: '',
            description: '',
            costEstimate: '',
            modifications: false,
            photo: null
          }
        ]
        this.saveInspections()
      }
    },
    saveInspections() {
      localStorage.setItem('inspections', JSON.stringify(this.inspections))
    },
    addInspection(newInspection) {
      newInspection.id = Date.now()
      this.inspections.push(newInspection)
      this.saveInspections()
    },
    updateInspection(updatedInspection) {
      const index = this.inspections.findIndex(i => i.id === updatedInspection.id)
      if (index !== -1) {
        this.inspections[index] = updatedInspection
        this.saveInspections()
      }
    }
  }
})
