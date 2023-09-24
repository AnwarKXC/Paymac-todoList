import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import db from './_db.js'
import { uid } from 'uid'
const resolvers = {
   Query: {
      todos: () =>db.todo,
      todo: ( _, args ) =>db.todo.find( ( todo ) => todo.id === args.id )
   },
   Mutation: {
      deleteTodo ( _ , args ) {
         db.todo = db.todo.filter( todo => todo.id !== args.id )
         return db.todo
      },
      addTodo (_,args) {
         let todo = {
            ...args.todo,
            id:uid(),
         }
         db.todo.push(todo)
         return todo
      },
      updateTodo ( _, args ) {
         db.todo = db.todo.map( ( todo ) => {
            if ( todo.id === args.id ) {
               return { ...todo , ...args.edits}
            }
            return todo
         } )
         return db.todo.find((todo)=>todo.id===args.id)
      }
   }
}
// server setup
const server = new ApolloServer( {
   typeDefs,
   resolvers
} )

const { url } = await startStandaloneServer( server, {
   listen: { port: 4000 }
} )

console.log( `🚀  Server ready at: ${ url }` )