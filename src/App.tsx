import {Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <AuthContextProvider>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" exact component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
