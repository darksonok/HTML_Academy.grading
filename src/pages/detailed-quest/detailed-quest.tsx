import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router-dom';
import { DetailedQuestType } from '../../types/quests';
import { fetchDetailedQuest } from '../../services/api';
import { QuestDifficulty, QuestTypes } from '../../const';

const DetailedQuest = () => {

  const { id } = useParams<{id: string}>();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const [detailedQuest, setDetailedQuest] = useState({} as DetailedQuestType );
  const [isDetailedQuestLoading, setDetailedQuestLoadingStatus] = useState(true);

  useEffect(() => {
    fetchDetailedQuest(Number(id), setDetailedQuest, setDetailedQuestLoadingStatus)
  }, [id])

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpened(false);
  }

  return (
    isDetailedQuestLoading
    ? <p> Данные загружаются </p>
    :<MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${detailedQuest.coverImg}`}
          alt={detailedQuest.title}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{detailedQuest.title}</S.PageTitle>
            <S.PageSubtitle>{QuestTypes.filter((questType) => questType.type === detailedQuest.type)[0].name }</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{detailedQuest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${detailedQuest.peopleCount[0]}-${detailedQuest.peopleCount[1]}`} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{QuestDifficulty.filter((quest) => quest.type === detailedQuest.level)[0].name  }</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {detailedQuest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseButtonClick={closeBookingModal}/>}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
