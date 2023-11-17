# Bridge Troll Toll 

## Week 7 Large group project

The goal of this app is to provide a platform for bridge troll toll operators to make informed deicions on which bridge to live under and optimise their toll revenue by anaylising live data from the **Waka Kotahi: Auckland Traffic API**. You can use the API to fetch real-time data on bridges, allowing toll operators to assess the best times of the day and other factors influencing toll collection. Measure in Gold teeth 

## Domain Knowledge

Trolls have no use of dollars and cents. You need to know about troll currency. Usually troll toll charges around 5 rock candies per car crossing a bridge. Usually payment is automated using the cars liences plates. Some drivers pay ahead. 

**About Troll Curcuncy:** 

- 1Ȼ is 1 troll rock candy, the smallest division of currency 
- 100 Rock Candies = 1 Gold Ring (AuR) : 10Ȼ = 1AuR
- 100 Gold Rings = 1 Goat (GT) : 100AuR = 1 GT

## The Tech

A Boilerplate is already set up for you with everything you will need to get started. This boilerplate is set up to use:

* [React](https://reactjs.org/docs/getting-started.html)
* [ReactQuery](https://tanstack.com/query/v4/docs/react/overview) 
* [Express](https://expressjs.com/en/api.html)
* [Knex.js](https://knexjs.org/)
* [Sass](https://sass-lang.com/)
* Auth? 

Additionally, the app will use the [Auckland Transport API](https://nzta.govt.nz/traffic-and-travel-information/use-our-data/about-the-apis/auckland-traffic-api/) to fetch real-time data on bridges and tolls.

## User Stories

### MVP

As a troll toll operator:
* I want to view a list of bridges in Auckland and their stats
* I want to see an average estimate of how much toll can be collected per hour.

As a registered troll toll operator user:  
* I want to be able to log in to my account
* I want to be able to save my favourite bridges 


### Stretch

As a toll operator:
* I want to receive automated recommendations for adjusting toll rates during peak hours.
* I want to compare toll revenue between different bridges.


### Stretchier Stretch
* I want to analyze toll collection trends based on different times of the day through visualisations.
* I want to identify peak hours for each bridge to maximize revenue through visualisation.

---

## Views (Client Side)

| name | purpose |
| --- | --- |
| Login | View for the toll operator to enter their login credentials |
| Register | View for the toll operator to sign up |
| Home | Welcome toll operators and links to the app|
| Bridges | Display a list of bridges with toll collection data |
| My Bridges | Display a list of bridges with toll collection data saved by the user|
| Analytics | Provide tools to analyze toll collection trends |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/v1/auth/login | Yes | Log In a Toll Operator | The Toll Operator's JWT Token |
| Post | /api/v1/auth/register | Yes | Register a Toll Operator | The Toll Operator's JWT Token |
| Get | /api/v1/bridges | No | Get all bridges with toll collection data | Array of Bridge Objects with Toll Data |
| Get | /api/v1/tolls/analytics | Yes | Get analytics data for toll collection | Analytical Data for Optimization |
| Post | /api/v1/tolls/rate-adjust | Yes | Adjust toll rates for optimal revenue | 201 status code |

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
| addedByUser | string | Toll operator who added the bridge data |

### Toll Analytics

| Column Name | Data Type | Purpose |
| --- | --- | --- |
| id | integer | Unique identifier for each toll analytics entry |
| bridgeId | integer | Bridge ID associated with the toll data |
| timestamp | date/time | Date and time of the toll collection |
| revenue | decimal | Amount of revenue collected during the toll |

## Authentication

Follow the setting-up-auth.md document in this repo to set up auth. 

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
