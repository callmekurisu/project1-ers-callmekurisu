import React from 'react';

export class RegisterComponent extends React.Component {


    render() {
        return (

            <div className="container" id="login-main">
                <div className="row">
                    <div className="col-12 col-md-offset-3">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h6><strong>Register for Revature ERS</strong></h6>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-12">

                                        <form id="register-form" action="" method="post" >
                                            <div className="form-group">
                                                <input type="text" name="firstName" id="firstname" tabindex="1" className="form-control" placeholder="First Name" required/>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" name="lastName" id="lastname" tabindex="1" className="form-control" placeholder="Last Name" required/>
                                            </div>

                                            <div className="form-group">
                                                <input type="text" name="username" id="username" tabindex="1" className="form-control" placeholder="Username" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" tabindex="1" className="form-control" placeholder="Email Address" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="password" id="password" tabindex="2" className="form-control" placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" name="confirm-password" id="confirm-password" tabindex="2" className="form-control" placeholder="Confirm Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-xl col-lg col-sm-6 col-sm-offset-3">
                                                        <input type="submit" name="register-submit" id="login-submit" tabindex="4" className="form-control btn btn-register" />
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
