import { createApp } from "vue"
import App from "./App.vue"
import "./assets/tailwind.css"
import i18n from "../locales/i18n"

// import { ApolloClientProvider } from '@vue/apollo-composable'
// import apolloClient from './apollo.js';



const app = createApp( App )
app.use( i18n )
// app.use( ApolloClientProvider, apolloClient )
app.mount( "#app" )
