# RealEstateCare Inspectie Applicatie

Deze webapplicatie is ontwikkeld als prototype voor RealEstateCare.  
De applicatie beheert geplande, actieve, voltooide en geannuleerde inspecties.  
Inspecteurs kunnen nieuwe inspecties aanmaken, inspectierapporten invullen, foto's uploaden en alles beheren via een mobielvriendelijke touch-interface.


---------------


## Project Functionaliteiten

- Inloggen met gebruikersnaam en wachtwoord (gesimuleerd via localStorage).
- Dashboard met vier hoofdknoppen: Geplande Inspecties, Voltooide Inspecties, Kennisbank, Instellingen.
- Navigatie via Vue Router.
- Inspectielijst ophalen via externe web API (MyJSONServer):
  - GitHub database: [https://github.com/marcosamdc/db-json](https://github.com/marcosamdc/db-json)
  - JSON endpoint: [https://my-json-server.typicode.com/marcosamdc/db-json/inspections](https://my-json-server.typicode.com/marcosamdc/db-json/inspections)
- Lokale opslag van inspecties (localStorage) voor geplande, voltooide en actieve inspecties.
- Weergave van inspecties gesorteerd op datum.
- Detailweergave van inspecties bij selectie.
- Inspectierapport invullen met schade-informatie en foto-upload (Base64 opslag).
- Responsive mobielvriendelijk ontwerp (Vuetify).
- Hamburger-menu voor navigatie bij smalle schermen (< 648px).
- Meldingen via bel-icoon in de header.
- GitHub repository: [https://github.com/marcosamdc/vue-application](https://github.com/marcosamdc/vue-application)


---------------


## Technische keuzes

- **Framework:** Vue 3
- **State Management:** Pinia
- **Componenten:** Vuetify 3
- **Routing:** Vue Router
- **Opslag:** LocalStorage (voor inspecties en loginstatus)
- **Responsiveness:** Mobile-first ontwerp
- **Formulieren:** Vuetify form components
- **Validaties:** Basis front-end validaties


---------------


## Veiligheid, Toegankelijkheid en Gebruiksvriendelijkheid

### Veiligheid

- Inlogstatus opgeslagen in localStorage.
- Router Guard voorkomt toegang tot beveiligde routes zonder inlog.


---------------


### Gebruiksvriendelijkheid

- Grote knoppen en duidelijke iconen.
- Mobielvriendelijk ontwerp en eenvoudige navigatie.
- Duidelijke terugknoppen op elke pagina.
- Gebruik van kleuren en pictogrammen voor gebruiksgemak.


---------------


### Toegankelijkheid

- Vuetify ondersteunt toetsenbordnavigatie en focus management.
- Alt-teksten bij afbeeldingen.
- Kleurcontrasten voldoen aan WCAG 2.1 niveau A.
- Eenvoudig taalgebruik en duidelijke structuur.


---------------


## Bekende beperkingen

- Foto's worden als Base64-string opgeslagen in localStorage (geen server upload).
- Geen dynamische API-synchronisatie naar externe databases.
- Meldingen zijn statisch en niet live gekoppeld aan backend.


---------------


## Auteur

- **Naam:** Antonio Marcos Duarte de Castro
- **Project:** RealEstateCare - Inspectiebeheer Prototype

