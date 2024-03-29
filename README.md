# GraphQL-API
Ce projet utilise GraphQL pour gérer les requêtes API au travers d'un serveur Apollo. Vous pouvez trouver ci-dessous des liens utiles pour la documentation, ainsi que des ressources associées.

## Documentation GraphQL

- [Documentation GraphQL Codegen](https://the-guild.dev/graphql/codegen/docs/getting-started) : Cette documentation fournit des informations sur la génération de code GraphQL à partir de votre schéma GraphQL.

## Exercice GraphQL

- [Set up de l'exercice](https://graphql-fundamentals.vercel.app/server/setup)
- [Repo de l'exercice](https://github.com/Punkte/m1devefrei) : Repo donné pour le cours
- [Page de l'exercice](https://graphql-fundamentals.vercel.app/server/exercise) : Exercice demandé pour le cours

# Tests

**Operation:**
```graphql
query MyQuery($name) {
  doctors {
    name
  }
}
```
**Response:**
```json
{
  "data": {
    "doctors": [
      {
        "name": "Samia Mekame"
      },
      {
        "name": "Catherine Bedoy"
      }
    ]
  }
}
```
**Operation:**
```graphql
query ExampleQuery($doctorId: ID!) {
  doctor(id: 1) {
    speciality
  }
}
```
**Response:**
```json
{
  "data": {
    "doctor": {
      "speciality": "OPHTALMOLOGIST"
    }
  }
}
```
**Operation:**
```graphql
query ExampleQuery($doctorId: ID!) {
  doctor(id: $doctorId) {
    specialty
  }
}
```
**Variables:**
```json
{
  "doctorId": 1
}
```
**Response:**
```json
{
  "data": {
    "doctor": {
      "speciality": "OPHTALMOLOGIST"
    }
  }
}
```

Filtre par Spécialité

**Operation:**
```graphql
query ExampleQuery($specialities: [Speciality!]) {
  doctors(specialities: $specialities) {
    name
    id
  }
}
```

**Variables:**
```json
{
  "specialities": ["OPHTALMOLOGIST"]
}
```

**Response:**
```json
{
  "data": {
    "doctors": [
      {
        "name": "Samia Mekame",
        "id": "1"
      }
    ]
  }
}
```

Division
**Operation:**
```GraphQL
#divide(number1: Int!, number2: Int!): Float!
query ExampleQuery($number1: Int!, $number2: Int!) {
  divide(number1: $number1,number2: $number2)
}
```

**Variables:**
```json
{
  "number1": 609,
  "number2":29
}
```

**Response:**
```json
{
  "data": {
    "divide": 21
  }
}
```
Multiplication, additions, etc
```GraphQL
query ExampleQuery($number1: Int!, $number2: Int!) {
  divide(number1: $number1,number2: $number2)
  multiply(number1: $number1, number2: $number2)
  add(number1: $number1, number2: $number2)
  subtract(number1: $number1, number2: $number2)
  modulo(number1: $number1, number2: $number2)
}
```

**Variables:**
```json
{
  "number1": 609,
  "number2":29
}
```

**Response:**
```json
{
  "data": {
    "divide": 21,
    "multiply": 17661,
    "add": 638,
    "subtract": 580,
    "modulo": 0
  }
}
```

Trouver la plus proche couleur parmi un tableau de couleur prédéfinit (remplacée par la suivante)

```GraphQL
query Query($targetColor: String!) {
  closestColor(targetColor: $targetColor)
}
```

**Variables:**
```json
{
  "targetColor": "#ff0000"
}
```

**Response:**
```json
{
  "data": {
    "closestColor": "#FF5733"
  }
}
```


Trouver la plus proche couleur parmi un tableau de couleur prédéfinit (avec un objet à la place d'un tableau, hors exo)

```GraphQL
  query Query($targetColor: String!) {
    closestColor(targetColor: $targetColor) {
      name
      group
    }
  }
```

**Variables:**
```json
{
  "targetColor": "#ff0000"
}
```

**Response:**
```json
{
  "data": {
    "closestColor": {
      "name": "Orange Red",
      "group": "Oranges"
    }
  }
}
```

## Ghibli 

### Query
```GraphQL
query GhibliQuery {
  getPeople {
    id
    eyeColor
    films {
      id
      title
    }
  }
  getFilms {
    id
    title
    people {
      eyeColor
      id
    }
  }
}
```

### Endpoints de l'api:
GET /films 
GET /films/{id} 
GET /people 
GET /people/{id} 
GET /locations 
GET /locations/{id} 
GET /species 
GET /species/{id} 
GET /vehicles 
GET /vehicles/{id}
