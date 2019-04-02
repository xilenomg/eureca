import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Titles from './pages/Titles/Titles.jsx';
import Title from './pages/Title/Title.jsx';

class App extends Component {
  render() {
    return (
      <div className="EurecaApp">
        <Router>
          <Header />
          <Route path="/" exact component={Titles} />
          <Route path="/title/:id" exact component={Title} />
          <Footer />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('eureca-app'));
