import './assets/main.css';                  // Eigen stylesheet (optioneel)
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap';                            // Bootstrap JS (voor bijv. modals, dropdowns)

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
