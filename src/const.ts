export enum AppRoute {
  Home= '/',
  Contacts=  '/contacts',
  Quest= '/quest/:id'
}

export enum APIRoute {
  Quests = '/quests',
  Oreder = '/oreders'
}

const BASE_URL = 'http://localhost:3001';

export {BASE_URL};
