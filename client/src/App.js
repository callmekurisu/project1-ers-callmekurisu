import React, { Component } from 'react';
//import { Provider } from 'react-redux'; save for refactoring

import './Include/bootstrap';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNav from './Components/Nav.component';
import { HomeComponent } from './Components/Home/Home.component';
import { SignInComponent } from './Components/SignIn.component.js/SignIn.component';
import { RegisterComponent } from './Components/SignIn.component.js/Register.component';
import { AboutComponent } from './Components/About.component';
import { FourOFourComponent }  from './Components/404/FourOFour.component'
import { UserComponent } from './Components/SignIn.component.js/User.component';
//import { store } from './Redux/Store'; refactor later if possible


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
                <Route path="/register" component={RegisterComponent} />
                <Route path="/user" component={UserComponent} />
                <Route path="/about" component={AboutComponent} />
                {/* default */}
                <Route  component={FourOFourComponent} />
              </Switch>
            </div>
          </>
        </BrowserRouter>
      // </Provider >
    );
  }
}

export default App;
