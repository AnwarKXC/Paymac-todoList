import { ApolloServer } from '@apollo/server'
import { typeDefs } from './schema.js'
import db from './_db.js'
import express from 'express'
import { uid } from 'uid'
import cors from 'cors'
import http from 'http'
import bodyParser from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'



const resolvers = {
   Query: {
      todos: () => db.todo,
      todo: ( _, args ) => db.todo.find( ( todo ) => todo.id === args.id )
   },
   Mutation: {
      deleteTodo ( _, args ) {
         db.todo = db.todo.filter( todo => todo.id !== args.id )
         return db.todo
      },
      addTodo ( _, args ) {
         let todo = {
            ...args.todo,
            id: uid(),
         }
         db.todo.push( todo )
         return todo
      },
      updateTodo ( _, args ) {
         db.todo = db.todo.map( ( todo ) => {
            if ( todo.id === args.id ) {
               return { ...todo, ...args.edits }
            }
            return todo
         } )
         return db.todo.find( ( todo ) => todo.id === args.id )
      }
   }
}
// server setup

const app = express()
const httpServer = http.createServer( app )


const server = new ApolloServer( {
   typeDefs,
   resolvers
} )

await server.start()

app.use(
   '/graphql',
   cors( {
      origin: [ 'http://localhost:3000', 'http://localhost:3001'] } ),
   bodyParser.json( ),
   expressMiddleware( server )
)

await new Promise( ( resolve ) => httpServer.listen( { port: 8000 }, resolve ) )

console.log( `🚀 Server ready at http://localhost:8000/graphql` )