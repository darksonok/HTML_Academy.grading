import * as S from './container.styled';

type ContainerProps = {
  children: JSX.Element| JSX.Element[],
  isActive?: boolean
}

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
