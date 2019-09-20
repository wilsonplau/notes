## Introduction 
This is a simple notes application, built with Vue, Vuex, Express, Knex and PostgresQL. The application is designed to auto-save your work every 5 econds, or whenever you change from one note to another. All of the notes are persisted into the database. 

## Requirements
The application uses a PostgresQL database. Please specify a DATABASE_URL in your environment or modify the database configurations in /models/knexfile.js. 

## Setup
To install dependencies:
```bash
  yarn
```

To run database migrations and seed the DB:
```bash
  yarn migrate
  yarn seed
```

To build the client:
```bash
  yarn build
```

To start the server:
```bash
  yarn start
```

## Example
A deployed version of this application is viewable at notes.wilsonplau.com.  