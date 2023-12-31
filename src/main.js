import { createApp } from "vue"
import App from "./App.vue"
import "./assets/tailwind.css"
import i18n from "../locales/i18n"

const app = createApp( App )
app.use( i18n )
app.mount( "#app" )




// GraphQl setup

// import { createApp, provide, h } from 'vue'
// import { DefaultApolloClient } from '@vue/apollo-composable'
// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'


// import App from "./App.vue"
// import "./assets/tailwind.css"
// import i18n from "../locales/i18n"

// // HTTP connection to the API
// const httpLink = createHttpLink( {
//    uri: 'http://localhost:8000/graphql',
// } )


// // Create the apollo client
// const apolloClient = new ApolloClient( {
//    link: httpLink,
//    cache: new InMemoryCache(),
// } )

// const app = createApp( {
//    setup () {
//       provide( DefaultApolloClient, apolloClient )
//    },
//    render: () => h( App ),
// } )

// app.use( i18n )
// app.mount( "#app" )