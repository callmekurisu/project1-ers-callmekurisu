import React from 'react';
import { Link } from 'react-router-dom';

export class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  passwordChange = (e) => {
    this.setState({
      ...this.state,
      password: e.target.value
    })
  }

  usernameChange = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  // submit = (e) => {
  //   e.preventDefault();
  //   let cred = this.state;
  //   LeagueClient.post('users/login', cred)
  //     .then(res => {
  //         this.props.history.push('/view-champions');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  render() {
    return (
     
      <div className="container" id="login-main">
            <div className="row">
            <div className="col-12 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-6">
                     <strong>Login to Revature ERS</strong> 
                    </div>
                  </div>
                  <hr/>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-12">
                      <form id="login-form"  method="post" >
                        <div className="form-group ">
                          <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password"/>
                        </div>
                        
                        <div className="form-group">
                          <div className="row">
                            <div className=" col-xl col-lg col-sm-6 col-sm-offset-3">
                              <input type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-12">
                              <p><Link to="/register"> New around here? Register 
                              now!</Link></p>
                            </div>
                          </div>
                        </div>
                      </form>

                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}