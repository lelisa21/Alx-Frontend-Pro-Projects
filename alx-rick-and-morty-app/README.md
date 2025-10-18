
# graphql alx-rick-and-morty-app

## objective 

This project is a multi-phase learning journey designed to build proficiency in GraphQL, from writing basic queries to integrating them into a modern, full-stack React application. The project uses the popular Rick and Morty API as its data source, providing a fun and engaging context for learning.


## Key Concepts

**GraphQL Query Language:** The core syntax for defining data requirements. It replaces the need for multiple REST endpoints with a single, flexible endpoint.

**Schema and Types:** The Rick and Morty API defines types like Character, Episode, and Info, which dictate what data can be queried.

**Arguments:** Used to be specific in data requests (e.g., character(id: 1) or episodes(page: 2)).

**Pagination:** A common pattern for handling large datasets. The API uses an Info type containing data like pages, next, and prev to navigate through results.

**Apollo Client:** A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It handles caching, loading states, and error states.

**React Integration:** Using Apollo Client’s ApolloProvider makes the client instance available throughout the component tree, and the useQuery hook seamlessly fetches and manages data within components.

**TypeScript:** Adds static type definitions to the project, catching errors at compile time and providing better autocompletion and documentation. Interfaces are defined for the expected shape of the data from the GraphQL API.


## Tools and Libraries

**Runtime/Environment:** Node.js
**Framework:** Next.js (React framework with built-in routing, SSR capabilities, and optimizations)
**Language:** TypeScript (superset of JavaScript)
**GraphQL Client:** Apollo Client (for executing queries and managing state)
**GraphQL Core Library:** graphql
**Styling:** Tailwind CSS (utility-first CSS framework)
**Linting:** ESLint (for identifying and fixing code problems)
**API:** Rick and Morty API GraphQL Endpoint (https://rickandmortyapi.com/graphql)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


