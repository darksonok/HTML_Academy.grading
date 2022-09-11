import { ReactComponent as IconAllQuests } from '../../../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useEffect, useState } from 'react';
import { Quests } from '../../../../types/quests';
import { fetchQuests } from '../../../../services/api';
import { QuestTypes } from '../../../../const';
import { filterQuestByType } from '../../../../utils';

const QuestsCatalog = () =>
{

  const [quests, setQuests] = useState([] as Quests[])
  const [filteredQuests, setFilteredQuests] = useState([] as Quests[])
  const [isLoading, setLoadingStatus] = useState(true);
  const [activeQuestFilter, setActiveQuestFilter] = useState('allQuests');

  const questIconSelector = (questType: string) => {
    switch(true){
      case(questType === 'allQuests'):
      return <IconAllQuests />;
      case(questType === 'horror'):
      return <IconHorrors />;
      case(questType === 'mystic'):
      return <IconMystic />;
      case(questType === 'detective'):
      return <IconDetective />;
      case(questType === 'adventures'):
      return <IconAdventures />;
      case(questType === 'sci-fi'):
      return <IconScifi />;
    };
  }

  useEffect(() => {
    fetchQuests(setQuests, setLoadingStatus, setFilteredQuests);
  }, [])
  return (
    isLoading ?
    <p> Данные грузятся</p>
    :
  <>
    <S.Tabs>
      {QuestTypes.map((questType) => (
              <S.TabItem
              key={`${questType.type}-tab`}
              onClick={() => {
                setFilteredQuests(filterQuestByType(quests, questType.type));
                setActiveQuestFilter(questType.type)}}
              >
              <S.TabBtn isActive={questType.type === activeQuestFilter}>
                {questIconSelector(questType.type)}
                <S.TabTitle>{questType.name}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
      ))}
    </S.Tabs>

    <S.QuestsList>
      {filteredQuests.map((quest: Quests) => (
              <S.QuestItem
              key={quest.id}
              >
              <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={quest.previewImg}
                    width="344"
                    height="232"
                    alt={quest.title}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{quest.title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {`${quest.peopleCount[0]} - ${quest.peopleCount[1]} чел`}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {quest.level}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
      ))}

    </S.QuestsList>
  </>
);}

export default QuestsCatalog;
