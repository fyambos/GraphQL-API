import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {gql} from 'graphql-tag'

//Définition du schéma GraphQL
const typeDefs = gql`
  #graphql
  type Doctor {
    name: String
    speciality: Speciality
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
  # résolver
  type Query {
    doctors: [Doctor]
  }
`;

//Définition d'une source de données
const doctorsData = [
    {
      name: 'Samia Mekame',
      speciality: 'OPHTALMOLOGIST',
    },
    {
      name: 'Catherine Bedoy',
      speciality: 'PSYCHOLOGIST',
    },
  ];

//Implémentation d'un résolver (définit dans le schéma GraphQL)
const resolvers = {
    Query: {
      doctors: () => doctorsData,
    },
};

//Lancement serveur
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
   
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
   
console.log(`🚀  Server ready at: ${url}`);