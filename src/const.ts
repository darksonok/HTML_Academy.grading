export enum AppRoute {
  Home= '/',
  Contacts=  '/contacts',
  Quest= '/detailed-quest/:id'
}

export enum APIRoute {
  Quests = '/quests',
  Order = '/orders'
}

export const QuestTypes = [
  {
    type: 'allQuests',
    name: 'Все квесты'
  },
  {
    type: 'adventures',
    name: 'Приключения'
  },
  {
    type: 'horror',
    name: 'Ужасы'
  },
  {
    type: 'mystic',
    name: 'Мистика'
  },
  {
    type: 'detective',
    name: 'Детектив'
  },

  {
    type: 'sci-fi',
    name: 'Sci-fi'
  },
]

export const QuestDifficulty = [
  {
    type: 'easy',
    name: 'простой'
  },
  {
    type: 'medium',
    name: 'средний'
  },
  {
    type: 'hard',
    name: 'сложный'
  }
]

const BASE_URL = 'http://localhost:3001';

export {BASE_URL};
