# Bridge Troll Toll Calculator

## Week 7 Large group project

## Preface

This is a teacher-led group project that I collaborated on at Dev Academy. It was a great opportunity to practise our teamwork and technical skills in the lead up to our final projects. By the end of it, we had achieved our MVP and several of the stretch objectives listed below. The process was a celebration of comprehensive design-led planning, and using clear documentation to achieve a product that we were proud of within the given timeframe. We engaged in discussions about stress profiles, articulating our individual learning goals, and utilizing our roles within the team.

## Product background

The cost of living is on the rise, and house prices are skyrocketing. Fortunately, here in Wellington, we are safe from traffic monetisation, unlike our friends in Auckland who have to deal with the trolls that live under their landmark bridges. It's tough for a troll in 2023. There is a lot of competition and not a lot of good resources for trolls. Trolls are are the hunt for smarter, more digital ways to optimize their toll revenue. That's where we came in with our _Bridge Troll Toll Calculator_ app.

The goal of this app was to provide a platform for Auckland-based bridge troll toll-takers to make informed decisions on which bridge to live under and optimize their toll revenue by analyzing live data from sources such as the various **Google Maps APIs**. We used this to fetch real-time data on/near bridge locations, allowing toll operators to assess the best times of the day for collections and other factors influencing toll collection.

## Domain Knowledge

Trolls have no use for our dollars and cents. We had to design a product using troll currency to display information useful to them. Usually, a troll toll charge is around 5 rock candies per vehicle crossing a bridge. Usually, payment is automated using the cars' license plates. Some drivers pay ahead.

**About Troll Currency:**

- 1Ȼ is 1 troll rock candy, the smallest division of currency
- 100 Rock Candies = 1 Gold Ring (AuR) : 10Ȼ = 1AuR
- 100 Gold Rings = 1 Goat (GT) : 100AuR = 1 GT

## The Tech

- [React](https://reactjs.org/docs/getting-started.html)
- [ReactQuery](https://tanstack.com/query/v4/docs/react/overview)
- [Express](https://expressjs.com/en/api.html)
- [Knex.js](https://knexjs.org/)
- [Sass](https://sass-lang.com/)
- [Auth0](https://auth0.com/)
- [GoogleMapApis](https://developers.google.com/maps)

## Roles

- Team Lead - Gaby (Facilitator who set up the team, did code reviews and sent issues on github)
- Scrum Facilitator - Ming/ Keeley
- Vibe Watcher- Anthony
- Product Owner- Blue
- Git Keeper- Sofia

## User Stories

### MVP

A non-registered troll toll operator user should be able to:

- View a list of bridges in Auckland and their stats
- View a single bridge with all it's data
- See an average estimate of how much toll (in troll money) a bridge-troll can collect for each bridge using Google Maps to estimate this data.

### Stretch

As registered troll toll operator user should be able to:

- Log in to their account set up using auth
- Save their favourite bridges
- Set one bridge as their active-bridge, and no other troll can set it
- Log each time they take a toll

### External API Stretch

A registered toll operator user should be able to:

- See real live traffic data for each bridge
- See how the traffic data influences how much troll money can be made at each bridge (this will replace the estimate in the MVP)

### Stretchier Stretch

A registered toll operator user should be able to:

- Analyze toll collection trends based on different times of the day through visualisations.
- Identify peak hours for each bridge to maximize revenue through visualisation.
- Receive automated recommendations for adjusting toll rates during peak hours.
- See any other live analytics that might increase toll revenue and how they trend over time.
- Automate every time I would take a toll at my current active bridge.

## Documentation

## Workflow

- We used the Github KANBAN to assign ourselves tasks progress tickets along the board.
- When new features were ready to be committed to dev, I made sure to manage the pull requests and communicate to everyone to pull the latest changes down.

## Git workflow

Branch structure:

Main -> Dev -> front-end or back-end branches

Before large features were committed to the dev or main branches, I made sure that:

- file and function naming conventions were maintained across the app
- errors were well-handled
- no sensitive data was exposed on the client side
- it passed 'npm run lint' without any code-related warnings or errors
- no unnecessary comments or log messages remained
- that Types were used where applicable, and any Type issues were resolved
- user-facing updates (front end/ css crew) were checked for accessibility concerns (using the WAVE tool)

## Naming conventions

We ensured to be descriptive in each function/component name, referencing the particular layer of the stack.

Function names:

- getAllBridgesDb()
- getFavBridgesDb()
- addFavBridgeDb()
- getAllBridgesApi()
- getBridgeApi()

Component names

- BridgesList.tsx
- FavouriteBridges.tsx
- SingleBridge.tsx
- Home.tsx
- App.tsx

### Views (Client Side)

| name       | MVP | purpose                                                                                     |
| ---------- | --- | ------------------------------------------------------------------------------------------- |
| Home       | Yes | Welcomes troll toll operators and links to the app (to all bridges) and sign in for stretch |
| Bridges    | Yes | Display a list of bridges with toll collection data                                         |
| Bridge     | Yes | Display a single bridge using it's id with it's data                                        |
| Login      | No  | View for the toll operator to enter their login credentials                                 |
| Register   | No  | View for the toll operator to sign up                                                       |
| My Bridges | No  | Display a list of favourite bridges saved by the user and active bridge                     |
| Analytics  | No  | Provide tools to analyze toll collection trends                                             |

### API (Client - Server)

| Method | Endpoint              | Protected | Usage                                              | Response                      |
| ------ | --------------------- | --------- | -------------------------------------------------- | ----------------------------- |
| Get    | /api/v1/bridges       | No        | Get all bridges with toll collection data          | Array of Bridge Objects       |
| Get    | /api/v1/bridges/:id   | No        | Get one bridge with sats and toll collection data  | Single Bridge Data            |
| Post\* | /api/v1/auth/login    | Yes       | Log In a Toll Operator                             | The Toll Operator's JWT Token |
| Post\* | /api/v1/auth/register | Yes       | Register a Toll Operator                           | The Toll Operator's JWT Token |
| Get\*  | /api/v1/bridges/fav   | Yes       | Get the list of favourite bridges a user has saved | Array of ints (int = an id)   |
| Post\* | /api/v1/bridges/fav   | Yes       | Add a saved favourite bridge to the db             | 201 status code               |

Endpoints with a \* were stretch objectives

### DB (Server Side)

### Bridges

| Column Name   | Data Type | Purpose                                                         |
| ------------- | --------- | --------------------------------------------------------------- |
| id            | integer   | Unique identifier for each bridge                               |
| name          | string    | Name of the bridge                                              |
| location      | string    | Location of the bridge                                          |
| type          | string    | Type of the bridge (e.g., Motorway bridge, Road bridge)         |
| year_built    | integer   | Year the bridge was built                                       |
| length_meters | string    | Length of the bridge in meters                                  |
| lanes         | integer   | Number of lanes on the bridge                                   |
| added_by_user | integer   | Troll toll operator userID who added the bridge data (auth0_id) |
| busyness      | integer   | density of bridge traffic determining estimated toll collected  |

### Users/ Trolls

| Column Name | Data Type | Purpose                                                       |
| ----------- | --------- | ------------------------------------------------------------- |
| id          | integer   | Unique identifier for each user                               |
| email       | string    | used to log in to account                                     |
| first_name  | string    | trolls first name                                             |
| last_name   | string    | troll's last name                                             |
| auth0_id    | string    | Unique identifier used for auth supplied by auth0 when set up |

### Favourite Bridges (Many to Many / join table)

| Column Name | Data Type | Purpose                     |
| ----------- | --------- | --------------------------- |
| id          | integer   | Unique identifier           |
| user_id     | integer   | Which user saved the bridge |
| bridge_id   | integer   | Which bridge was saved      |

### Toll Collected

| Column Name | Data Type | Purpose                                         |
| ----------- | --------- | ----------------------------------------------- |
| id          | integer   | Unique identifier for each toll analytics entry |
| bridge_id   | integer   | Bridge ID associated with the toll data         |
| timestamp   | date/time | Date and time of the toll collection            |
| revenue     | decimal   | Amount of revenue collected during the toll     |

Database on toll analytics are up to you!

## Database functions:

getAllBridgesDb()

Returns:

```json
[
  {
    "id": 1,
    "name": "Auckland Harbour Bridge",
    "location": "Auckland Harbour Bridge",
    "type": "Motorway bridge",
    "year_built": 1959,
    "length_meters": 1020,
    "lanes": 8,
    "added_by_user": ""
  }
  // ...
]
```

getTollAnalyticsDb()

Returns:

```json
[
  {
    "id": 1,
    "bridgeId": 1,
    "timestamp": 1495083077243,
    "revenue": 2.39
  }
  // ...
]
```

## Authentication

To make a request to the server that checks the authentication of the user, use the custom hook `useAuthorisedRequest(method, endpoint, body)` which returns `<Promise<() => Promise<request.response>>>`

| Parameter | Data Type           | Purpose                                                   |
| --------- | ------------------- | --------------------------------------------------------- |
| method    | string              | the type of the request. `get` `post` `patch` or `delete` |
| endpoint  | string              | the endpoint of the request                               |
| body      | string or undefined | the body of the request                                   |

An example on how to create an authorized request:

```
//React Component function
export function CreateGetRequest() {

  // Use the hook at the top level of your component
  const makeRequest = useAuthorisedRequest('get', '/api/v1/auth', undefined)

  async function OnGetRequest() {

    // Make the request
    const response = await (await makeRequest)()
    // Output the response to console
    console.log(response)
  }

  return (
    // Only send an authorised request if the user is authenticated
    <IfAuthenticated>
      <button onClick={OnGetRequest}>Create GET request</button>
    </IfAuthenticated>
  )
}
```

There are two example react components `SignIn` and `SignOut` that show how to sign the user in, out, and how to make an authenticated request. They should be placed as siblings in their parent component.

```
<SignIn/>
<SignOut/>
```

### Helper Components

There are two helper components that will render their children conditionally.

```
// Will only render the <p> tag if the user is currently authenticated
<IfAuthenticated>
      <p>Currently signed in</p>
</IfAuthenticated>
```

````
// Will only render the <p> tag if the user is currently signed out
<IfNotAuthenticated>
      <p>Currently signed out. Click here to sign in</p>
</IfNotAuthenticated>```
---

## Setup

Run the following commands in your terminal:

```sh
npm install
npm run knex migrate:latest
npm run knex seed:run
cp .env.example .env
````

To run in development:

```sh
npm run dev
```

To run in production:

```sh
npm start
```
