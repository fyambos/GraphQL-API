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
export const resolvers = {
    Query: {
      doctors: () => doctorsData,
    },
};