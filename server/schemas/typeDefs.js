const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`

type Book {
    bookId: 
    authors: 
    description:
    title: 
    image: 
    link: 
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: ...
}

type removeBook {
    
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook: 
}

type Auth {
    token: ID!
    user: User
}
`
