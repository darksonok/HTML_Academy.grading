import { Header, Footer } from '../../../components/common/common';

type MainLayoutProps = {
  children: JSX.Element | JSX.Element[],
  isActive?: boolean
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
