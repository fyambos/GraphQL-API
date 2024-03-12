import { GraphQLError } from "graphql";

//Définition d'une source de données
const doctorsData = [
    {
      id: '1',
      name: 'Samia Mekame',
      speciality: 'OPHTALMOLOGIST',
    },
    {
      id: '2',
      name: 'Catherine Bedoy',
      speciality: 'PSYCHOLOGIST',
    },
];

//Implémentation d'un résolver (définit dans le schéma GraphQL)
export const resolvers = {
    Query: {
        doctors: (parent, args, context, info) => {
            const {specialities} = args
            return doctorsData.filter(doctor => specialities.includes(doctor.speciality))
          },
        doctor: (parent, args, context, info) => {
            const id = args.id
            return doctorsData.find(d => d.id === id)
        },
        divide: (parent, args, context, info) => {
            const {number1, number2} = args
            if (number2 === 0) {
              throw new GraphQLError('cannot divide by 0')
            }
            return number1 / number2
        },
    },
};
