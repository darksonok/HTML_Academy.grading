import * as S from './page-heading.styled';

type PageHeadingProps = {
  children: JSX.Element | JSX.Element[],
  isActive?: boolean
}

const PageHeading = ({ children, ...props }: PageHeadingProps) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
