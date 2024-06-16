import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import CarDetailsPage from './pages/CarDetailsPage';
import './styles';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cars/:id" component={CarDetailsPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
