import { QuestTypes } from './const';
import { Quests } from './types/quests'

const filterQuestByType = (quests: Quests[], type: string) => type === QuestTypes[0].type? quests : quests.slice().filter((quest) => quest.type === type);


export {
  filterQuestByType,
}
