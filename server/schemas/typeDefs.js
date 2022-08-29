// import gql
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Query {
    me: User
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(title: String!, authors: [String]!, description: String!, bookId: String!, image: String!): User
    removeBook(bookId: String!): User
}
`;

// export typeDefs
module.exports = typeDefs;