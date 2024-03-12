import { GraphQLError } from "graphql";
import { doctorsData, filmsData, peopleData } from './datasources/data.js';
import { hexColorData } from './datasources/hex.js';
import { findClosestColor } from "./colors.js";
//Implémentation d'un résolver (définit dans le schéma GraphQL)
export const resolvers = {
    Query: {
        doctors: (parent, args, context, info) => {
            const { specialities } = args;
            if (!Array.isArray(specialities) || specialities.length === 0) {
                throw new GraphQLError('invalid specialty');
            }
            return doctorsData.filter(doctor => specialities.includes(doctor.speciality));
        },
        doctor: (parent, args, context, info) => {
            const id = args.id;
            if (!id || typeof id !== 'string') {
                throw new GraphQLError('invalid id');
            }
            return doctorsData.find(d => d.id === id);
        },
        divide: (parent, args, context, info) => {
            const { number1, number2 } = args;
            if (typeof number1 !== 'number' || typeof number2 !== 'number') {
                throw new GraphQLError('must be numbers');
            }
            if (number2 === 0) {
                throw new GraphQLError('cannot divide by 0');
            }
            return number1 / number2;
        },
        multiply: (parent, args, context, info) => {
            const { number1, number2 } = args;
            if (typeof number1 !== 'number' || typeof number2 !== 'number') {
                throw new GraphQLError('must be numbers');
            }
            return number1 * number2;
        },
        add: (parent, args, context, info) => {
            const { number1, number2 } = args;
            if (typeof number1 !== 'number' || typeof number2 !== 'number') {
                throw new GraphQLError('must be numbers');
            }
            return number1 + number2;
        },
        subtract: (parent, args, context, info) => {
            const { number1, number2 } = args;
            if (typeof number1 !== 'number' || typeof number2 !== 'number') {
                throw new GraphQLError('must be numbers');
            }
            return number1 - number2;
        },
        modulo: (parent, args, context, info) => {
            const { number1, number2 } = args;
            if (typeof number1 !== 'number' || typeof number2 !== 'number') {
                throw new GraphQLError('must be numbers');
            }
            if (number2 === 0) {
                throw new GraphQLError('cannot divide by 0');
            }
            return number1 % number2;
        },
        closestColor: (parent, args, context, info) => {
            const { targetColor } = args;
            if (typeof targetColor !== 'string' || !targetColor.match(/^#[0-9A-Fa-f]{6}$/)) {
                throw new GraphQLError('must be an hex code string, eg: "#ff0000"');
            }
            const closestColorKey = findClosestColor(targetColor, hexColorData);
            const closestColor = hexColorData[closestColorKey];
            return closestColor;
        },
        getFilms: () => filmsData,
        getPeople: () => peopleData,
    },
};
