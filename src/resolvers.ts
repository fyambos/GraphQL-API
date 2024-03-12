import { GraphQLError } from "graphql";
import { doctorsData } from './datasources/data.js';
import { hexColorData } from './datasources/hex.js';
import { findClosestColor } from "./colors.js";
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
        multiply: (parent, args, context, info) => {
            const { number1, number2 } = args;
            return number1 * number2;
        },
        add: (parent, args, context, info) => {
            const { number1, number2 } = args;
            return number1 + number2;
        },
        subtract: (parent, args, context, info) => {
            const { number1, number2 } = args;
            return number1 - number2;
        },
        modulo: (parent, args, context, info) => {
            const { number1, number2 } = args;
            if (number2 === 0) {
              throw new GraphQLError('cannot divide by 0');
            }
            return number1 % number2;
        },
        closestColor: (parent, args, context, info) => {
            const { targetColor } = args;
            const closestColorKey = findClosestColor(targetColor, hexColorData);
            const closestColor = hexColorData[closestColorKey];
            return closestColor;
        }
    },
};
