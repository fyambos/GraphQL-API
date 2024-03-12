import gql from "graphql-tag";
//Définition du schéma GraphQL
export const typeDefs = gql `
  type Doctor {
    id: ID!
    name: String
    speciality: Speciality
  }

  type Query {
    doctors(specialities: [Speciality!]): [Doctor]
    doctor(id: ID!): Doctor
    divide(number1: Int!, number2: Int!): Float!
    multiply(number1: Int!, number2: Int!): Int!
    add(number1: Int!, number2: Int!): Int!
    subtract(number1: Int!, number2: Int!): Int!
    modulo(number1: Int!, number2: Int!): Int!
    closestColor(targetColor: String!): ColorData
    getFilms: [Film]!
    getPeople: [People]!
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }

  type ColorData {
    group: String
    name: String
  }

  type Film {
    id: ID!
    title: String!
    people: [People]!
  }
  
  type People {
    id: ID!
    name: String!
    eyeColor: String!
    films: [Film]!
  }
`;
