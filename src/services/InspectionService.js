// src/services/InspectionService.js

import axios from 'axios'

const API_URL = 'https://my-json-server.typicode.com/marcosamdc/db-json/inspections'

export default {
  getInspections() {
    return axios.get(API_URL)
  }
}
