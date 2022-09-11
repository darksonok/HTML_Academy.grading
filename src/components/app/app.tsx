import { ThemeProvider } from 'styled-components';
import { appTheme } from './common';
import * as S from './app.styled';
import { BrowserRouter, Route, Switch } from '../common/common';
import { AppRoute } from '../../const';
import DetailedQuest from '../../pages/detailed-quest/detailed-quest';
import Home from '../../pages/home/home';
import NotFound from '../not-found/not-found';
import Contacts from '../../pages/contacts/contacts';


const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Home}>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
      </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
