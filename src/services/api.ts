import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { APIRoute, BASE_URL } from "../const";
import { DetailedQuestType, Quests } from "../types/quests";

const options: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: 5000,
}

const createAPI = (): AxiosInstance => axios.create(options);
const api = createAPI();

export const fetchQuests = async (
  callbackForSetQuests: React.Dispatch<React.SetStateAction<Quests[]>>,
  callbackForSetLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
  callbackForSetFilteredQuests: React.Dispatch<React.SetStateAction<Quests[]>>
  ) => {
  await api.get<Quests[]>(APIRoute.Quests)
  .then( ({data}) => {
    callbackForSetQuests(data);
    callbackForSetFilteredQuests(data);
    callbackForSetLoadingStatus(false);
  });
};

export const fetchDetailedQuest = async (
  id: number,
  callbackForSetDetailedQuest: React.Dispatch<React.SetStateAction<DetailedQuestType>>,
  callbackForSetDetailedQuestLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  await api.get<DetailedQuestType>(`${APIRoute.Quests}/${id}`)
  .then( ({data}) => {
    callbackForSetDetailedQuest(data);
    callbackForSetDetailedQuestLoadingStatus(false);
  });
};

export default api;
