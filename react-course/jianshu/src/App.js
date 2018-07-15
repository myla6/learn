import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter,Route } from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Writer from './pages/writer';
import Download from './pages/download';

class App extends Component {
  render() {
    return (
      	<Provider store={store}>
          <BrowserRouter>
          	<div>
          		<Header />
          		<Route path='/' exact component={Home}></Route>
              <Route path='/download' exact component={Download}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/writer' exact component={ Writer}></Route>
          		<Route path='/detail/:id' exact component={Detail}></Route>
          	</div>
          </BrowserRouter>
      	</Provider>
    );
  }
}

export default App;
