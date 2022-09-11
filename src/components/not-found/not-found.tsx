import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../../components/common/common';
import * as S from './not-found.styled';

function NotFound () {
  return (
    <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>К сожалению пока такой страницы нет, но мы ее скоро придумаем</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
    </S.Main>
  </MainLayout>

  )
}

export default NotFound;
