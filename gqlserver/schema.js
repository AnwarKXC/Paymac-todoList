export const typeDefs = `#graphql
type Todo {
   id: ID!
   title: String!
}

type Query {
   todos:[Todo]
   todo(id:ID!):Todo
}

type Mutation {
   addTodo(todo: AddTodoinput!):Todo
   deleteTodo(id: ID): [Todo]
   updateTodo(id: ID , edits: EditTodoinput!): Todo
}



input AddTodoinput{
   title:String!
}
input EditTodoinput{
   title:String!
}
`