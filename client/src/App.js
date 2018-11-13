import React, { Component } from 'react';
//import { Provider } from 'react-redux'; save for refactoring

import './Include/bootstrap';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNav from './Components/Nav.component';
import { HomeComponent } from './Components/Home/Home.component';
import { SignInComponent } from './Components/SignIn.component.js/SignIn.component';
import { RegisterComponent } from './Components/SignIn.component.js/Register.component';
import { AboutComponent } from './About.component';

//import { store } from './Redux/Store'; refactor later is possible


class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
          <>
            <AppNav />
            <div id="main-content-container">
              <Switch>
                <Route path="/home" component={HomeComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                {/* <Route path="/session" component={RegisterComponent} /> */}
                <Route path="/register" component={RegisterComponent} />
                <Route path="/about" component={AboutComponent} />
                {/* default */}
              </Switch>
            </div>
          </>
        </BrowserRouter>
      // </Provider >
    );
  }
}

export default App;
