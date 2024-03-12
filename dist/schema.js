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
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;
