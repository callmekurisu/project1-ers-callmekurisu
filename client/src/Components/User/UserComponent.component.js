import React from 'react';
import ErsClient from '../../Axios/ErsClient';
import time from '../../Include/time';
import { FaSignOutAlt } from 'react-icons/fa';
export class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      reimbs: [],
      noData: ''
    }
  }

  //watch out now! lexical this!
  componentDidMount() {
    //it doesn't matter what comes after that slash
    //user id is fetched server side
    ErsClient.get('users/active')
      .then((response) => {
        console.log(`got ${response.data.length} reimbursements`)
        if (response.data.length > 1) {
          this.setState({ 
            ...this.state, 
            reimbs: response.data 
          })
         
        } else {
          this.setState({
            ...this.state,
            userName: response.data[0].username,
            noData: "Create Your First Reimbursement"
          })
        }

      })

      .catch(err => {
        window.location.assign('127.0.0.1/404')
        console.log(err);
      })
  }

  logout = () => {

    ErsClient.post('users/logout')
      .then(res => {
        if (res.status === 200) {
          window.location.assign('/home')
        }
      })
      .catch(err => {
        window.location.assign('127.0.0.1/404')
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        
        <span id="logout"><FaSignOutAlt className='pointer' style={{ color: "grey" }} size={20} onClick={this.logout} />Logout</span><h4>Logged in as: {this.state.userName}</h4>
        <div container id="empbtn">
          
          <button className="btn btn-primary">
            Create New
          </button>

        </div>
        <>
          <hr />
          <h6>{this.state.noData}</h6>
          {this.state.reimbs.length > 1 &&
            this.state.reimbs.map((info, index) => (
              <div className="col col-12 col-md-12 col-lg-12 reimb-col">
                <div key={index} className="card reimb-card">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>REVATURE ERS FORM v0.1B1810</strong></li>
                    <li className="list-group-item">First Name: {info.firstName.toUpperCase()}</li>
                    <li className="list-group-item flex-row-sb">Last Name: {info.lastName.toUpperCase()}</li>
                    <li className="list-group-item flex-row-sb">Email: {info.email.toUpperCase()}</li>
                    <li className="list-group-item flex-row-sb">Request #: {info.request.reimbId}</li>
                    <li className="list-group-item flex-row-sb">Amount $: {info.request.amount}</li>
                    <li className="list-group-item flex-row-sb">Submitted on: {time(info.request.submitted)}</li>
                    <li className="list-group-item flex-row-sb">Description: {info.request.description.toUpperCase()}</li>
                    <li className="list-group-item flex-row-sb">Type: {info.request.typeString.toUpperCase()}</li>
                    <li className="list-group-item flex-row-sb">Status: {info.request.statusString.toUpperCase()}</li>
                    <li className="list-group-item flex-row-sb">

                    </li>
                  </ul>
                </div>

              </div>
            ))
          }

        </>
      </div>
    )
  }
}