//Définition d'une source de données
export const doctorsData = [
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

export const colorsData = ["#FF5733", "#33FF57", "#3357FF"];

export const filmsData = [
  { id: '1', title: 'Castle in the Sky', people: [] },
  { id: '2', title: 'Grave of the Fireflies', people: ['1', '2'] },
];

export const peopleData = [
  { id: '1', name: 'Setsuko', eyeColor: 'Brown', films: ['2'] }, 
  { id: '2', name: 'Seita', eyeColor: 'Blue', films: ['2'] },
];
