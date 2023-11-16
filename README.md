# Bridge Troll Toll Calculator

## Week 7 Large group project

The focus of this app is to practice using the Full Stack we teach, (with auth in place) in a large scale app.

The idea of the app is to provide a platform for calculating tolls for various bridges using the Auckland Transport API. Users can log in, input their route details, and the app will calculate the toll based on the selected bridge.

## The Tech

A Boilerplate is already set up for you with everything you will need to get started. This boilerplate is set up to use:

* [React](https://reactjs.org/docs/getting-started.html)
* [ReactQuery](https://tanstack.com/query/v4/docs/react/overview) 
* [Express](https://expressjs.com/en/api.html)
* [Knex.js](https://knexjs.org/)
* [Sass](https://sass-lang.com/)

Additionally, the app utilizes the Auckland Transport API to fetch real-time data on bridges and tolls.

## User Stories

### MVP

As a non-registered user:
* I want to view a list of bridges.
* I want to select a bridge and input my route details.
* I want to see the calculated toll for my route.

As a registered user:
* I want to save my favorite routes.
* I want to track my toll expenses.
* I want to receive notifications for special toll discounts.

### Stretch

As a registered user:
* I want to compare toll rates between different bridges.
* I want to receive personalized suggestions for the most cost-effective routes.

---

## Views (Client Side)

| name | purpose |
| --- | --- |
| Login | View for the user to enter their login credentials |
| Register | View for the user to sign up |
| Home | Welcome users and links to the app|
| Bridges | Display a list of bridges |
| Calculator | Input route details and view calculated tolls |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/v1/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/v1/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/v1/bridges | No | Get all bridges | Array of Bridge Objects |
| Post | /api/v1/tolls/calculate | Yes | Calculate toll for a route | Calculated Toll Amount |
| Get | /api/v1/user/routes | Yes | Get user's saved routes | Array of Saved Routes |
| Post | /api/v1/user/routes/save | Yes | Save a route for a user | 201 status code |

## DB (Server Side)

Write and display the structure of the data

### Bridges

| Column Name | Data Type | Purpose |
| --- | --- | --- |
| id | integer | Unique identifier for each bridge |
| name | string | Name of the bridge |
| location | string | Location of the bridge |
| type | string | Type of the bridge (e.g., Motorway bridge, Road bridge) |
| yearBuilt | integer | Year the bridge was built |
| lengthMeters | string | Length of the bridge in meters |
| lanes | integer | Number of lanes on the bridge |
| addedByUser | string | User who added the bridge data |

### User Routes

| Column Name | Data Type | Purpose |
| --- | --- | --- |
| id | integer | Unique identifier for each saved route |
| userId | integer | User ID associated with the route |
| bridgeId | integer | Bridge ID associated with the route |
| routeDetails | object | Details of the saved route |
| dateSaved | date | Date when the route was saved |

## Authentication

Authentication is already set up in this project using the node module [authenticare](https://www.npmjs.com/package/authenticare). Users are currently able to login, logout, and register, and all user information will be stored in a table in our database.

If you wish to dive deeper on authenticare, docs are available [here](https://github.com/enspiral-dev-academy/authenticare/tree/main/docs). Of particular note are `getEncodedToken` and `getTokenDecoder` as they deal with how you add a token to your request and secure server routes respectively.

---

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run knex migrate:latest
npm run knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Deployment

Follow the [Dokku Guide]() to deploy your site.