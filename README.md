# Tide Accounts Dashboard

## Development server

Run `ng serve -o` for a dev server. The app will automatically load and reload if you change any of the source files.

## REST and API Services

 There are two services;
 - A REST API service `src/app/services/api.service.ts` that would be used across all other services.
 - Accounts service `src/app/services/accounts.service.ts` to `GET` and `PUT`  accounts.

 ## MOCK data

 - Although the services are available and hooked up to the components, since we don't have the data source, I have created a local data source for the accounts `src/app/data/accounts.ts` that can me readily be switched to the services.