import gql from "graphql-tag";
//Définition du schéma GraphQL
export const typeDefs = gql `
  type Doctor {
    id: ID!
    name: String
    speciality: Speciality
  }

  type Query {
    doctors: [Doctor]
    doctor(id: ID!): Doctor
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;
