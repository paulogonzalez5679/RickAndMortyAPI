import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import HomePage from '../pages/HomePage';
import CharactersPage from '../pages/CharactersPage';
import CharactersDetail from '../pages/CharactersDetail';

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect from="/Rick-and-Morty" to="/" />

          <Route exact path="/" name="App" component={HomePage} />
          <Route exact path="/characters" component={CharactersPage} />
          <Route exact path="/characters/:id" component={CharactersDetail} />
          {/* <Route path="/characters/:id" element={<CharactersDetail />} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
