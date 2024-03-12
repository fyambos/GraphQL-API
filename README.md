# GraphQL-API
Ce projet utilise GraphQL pour gérer les requêtes API au travers d'un serveur Apollo. Vous pouvez trouver ci-dessous des liens utiles pour la documentation, ainsi que des ressources associées.

## Documentation GraphQL

- [Documentation GraphQL Codegen](https://the-guild.dev/graphql/codegen/docs/getting-started) : Cette documentation fournit des informations sur la génération de code GraphQL à partir de votre schéma GraphQL.

## Exercice GraphQL

- [Page de l'exercice](https://graphql-fundamentals.vercel.app/server/setup) : Exercice demandé pour le cours
- [Repo de l'exercice](https://github.com/Punkte/m1devefrei) : Repo donné pour le cours

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