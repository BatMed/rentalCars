# Project Starter

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```
## Handling CORS for API Access
To access CommonShare API from "localhost", you might need to temporarily disable or bypass CORS restrictions in your browser. There are several browser extensions available that can help with this:

- CORS Unblock: Allows you to easily toggle CORS restrictions on and off for specific websites.
- CORS Everywhere: Provides granular control over CORS and allows you to modify request headers.
```
https://cors-anywhere.herokuapp.com/corsdemo
```
- Allow CORS: Access-Control-Allow-Origin: Enables you to override CORS restrictions for testing.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```
# Uses Case

## Rent a car

Click on "rent car" button to access the car page

## Search cars

Searching for cars will cause the "Recomendation Car" section to filter according to your search

## Favourites

- Favourite cars by clicking on the heart icon
- Click on the heart icon on the nav menu to filter favourite cars only
