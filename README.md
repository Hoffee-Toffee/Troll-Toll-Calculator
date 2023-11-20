# Bridge Troll Toll Calculator

## Week 7 Large group project

The cost of living is on the rise, and house prices are skyrocketing. Fortunately, here in Wellington, we are safe from traffic monetization, unlike our friends in Auckland who have to deal with the trolls that live under their landmark bridges. It's tough for a troll in 2023. There is a lot of competition and not a lot of good resources for trolls. Trolls are are the hunt for smarter, more digital ways to optimize their toll revenue. That's where we come in with our *Bridge Troll Toll Calculator* app.

The goal of this app is to provide a platform for Auckland-based bridge troll toll-takers to make informed decisions on which bridge to live under and optimize their toll revenue by analyzing live data from sources such as **Waka Kotahi: Auckland Traffic API**. You can use this or similar APIs to fetch real-time data on/near bridge locations, allowing toll operators to assess the best times of the day for collections and other factors influencing toll collection.

The extended timeframe for this project presents an opportunity for comprehensive planning and a deeper understanding of how you collaborate in groups. Use this time wisely to engage in discussions about your stress profiles, articulate your learning goals, and define roles within the team. Consider incorporating proper wireframes or designs using tools such as Figma, and take advantage of this phase to craft thorough documentation for the project. This strategic approach will not only enhance the efficiency of your teamwork but also contribute to the overall success of the project.  

## Domain Knowledge

Trolls have no use for our dollars and cents. You need to know about troll currency to display information that is useful to them. Usually, a troll toll charge is around 5 rock candies per vehicle crossing a bridge. Usually, payment is automated using the cars' license plates. Some drivers pay ahead. 

**About Troll Curcuncy:** 

- 1Ȼ is 1 troll rock candy, the smallest division of currency 
- 100 Rock Candies = 1 Gold Ring (AuR) : 10Ȼ = 1AuR
- 100 Gold Rings = 1 Goat (GT) : 100AuR = 1 GT

It would be wise to consider the troll client when building the app, they are known to be tough customers. 

## The Tech

A Boilerplate is already set up for you with everything you will need to get started. This boilerplate is set up to use:

* [React](https://reactjs.org/docs/getting-started.html)
* [ReactQuery](https://tanstack.com/query/v4/docs/react/overview) 
* [Express](https://expressjs.com/en/api.html)
* [Knex.js](https://knexjs.org/)
* [Sass](https://sass-lang.com/)
* [Auth0]([https://auth0.com/](https://oauth.net/2/))   

There is already some started data in the database on the Auckland bridges (you may wish to add more fields as you go or if you wish to add data from external APIs). 

Additionally, the app can use APIs such as the [Auckland Transport API](https://nzta.govt.nz/traffic-and-travel-information/use-our-data/about-the-apis/auckland-traffic-api/) to fetch real-time data on bridges. 

*Please note: The AT API documentation is a little hard to access, if it seems too hard we can pivot to help the Christchurch- based trolls.* 

## Roles

* Team Lead - Gaby 
* Scrum Facilitator 
* Vibe Watcher
* Product Owner
* Git Keeper


## User Stories

### MVP

As a non-registered troll toll operator:
* I want to view a list of bridges in Auckland and their stats
* I want to see an average estimate of how much toll a bridge-troll can be collect for each bridge using any sources to collect or estimate this data.
* I want to use the bridge stats provided to influence the toll estimates

As a registered troll toll operator user:  
* I want to be able to log in to my account set up using auth
* I want to be able to save my favourite bridges 


### Stretch

As a registered toll operator user:
* I want to see real live traffic data for each bridge 
* I want to compare toll revenue between different bridges.
* I want to see any other live analytics that might increase toll revenue


### Stretchier Stretch

As a registered toll operator user:
* I want to analyze toll collection trends based on different times of the day through visualisations.
* I want to identify peak hours for each bridge to maximize revenue through visualisation.
* I want to receive automated recommendations for adjusting toll rates during peak hours.
* I want to see any other live analytics that might increase toll revenue and how they trend over time. 


---
## Documentation

*Here is some starter documentation to get things going, you will update this as a team at the start of the project and as you go:* 

### Views (Client Side)

| name | purpose |
| --- | --- |
| Login | View for the toll operator to enter their login credentials |
| Register | View for the toll operator to sign up |
| Home | Welcome toll operators and links to the app|
| Bridges | Display a list of bridges with toll collection data |
| My Bridges | Display a list of bridges with toll collection data saved by the user|
| Analytics | Provide tools to analyze toll collection trends |

### API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/v1/auth/login | Yes | Log In a Toll Operator | The Toll Operator's JWT Token |
| Post | /api/v1/auth/register | Yes | Register a Toll Operator | The Toll Operator's JWT Token |
| Get | /api/v1/bridges | No | Get all bridges with toll collection data | Array of Bridge Objects with Toll Data |
| Get | /api/v1/tolls/analytics | Yes | Get analytics data for toll collection | Analytical Data for Optimization |
| Post | /api/v1/tolls/rate-adjust | Yes | Adjust toll rates for optimal revenue | 201 status code |

### DB (Server Side)

Here is a start on your database you can update these in your documentation. The bridge seed data has already been done for you. 

### Bridges - already set up

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

### Toll Analytics - not set up yet

| Column Name | Data Type | Purpose |
| --- | --- | --- |
| id | integer | Unique identifier for each toll analytics entry |
| bridgeId | integer | Bridge ID associated with the toll data |
| timestamp | date/time | Date and time of the toll collection |
| revenue | decimal | Amount of revenue collected during the toll |

## Authentication

Follow the setting-up-auth.md document in this repo to *very loosely* help you set up auth. Careful, it was taken from a previous challenge so some steps might be missing. Consider this a good challenge trying to adapt it to a new project that might be set up slightly differently 

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

Follow the [Dokku Guide](https://github.com/mako-2023/dokku-guide/blob/main/guides/5-Deploying-a-full-stack-application.md) to deploy your site.
