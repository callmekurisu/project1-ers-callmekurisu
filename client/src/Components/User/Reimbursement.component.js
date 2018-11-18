import React from 'react';
import ErsClient from '../../Axios/ErsClient';
export class ReimbursementComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reimbId: 0,
      amount: '',
      submitted: null,
      resolved: null,
      description: '',
      reciept: false,
      author: 0,
      resolver: 1,
      status: 1,
      type: 4,
      selection: ''
    }

  }


  componentDidMount() {
    //it doesn't matter what comes after that slash
    //user id is fetched server side
    //userId goes to author for merging reibmursement data in SQL

    ErsClient.get('users/active')
      .then((response) => {
        this.setState({
          ...this.state,
          author: response.data[0].userId,
        })

      })

      .catch(err => {
        window.location.assign('127.0.0.1/404')
      })
  }
  ///getting reimbursement form data now
  amountChange = (e) => {
    this.setState({
      ...this.state,
      amount: e.target.value
    })

  }

  descriptionChange = (e) => {
    this.setState({
      ...this.state,
      description: e.target.value
    })

  }

  lodging = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      type: 1,
      selection: 'Lodging'
    })

  }

  travel = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      type: 2,
      selection: 'Travel'
    })

  }

  food = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      type: 3,
      selection: 'Food'
    })

  }

  other = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      type: 4,
      selection: 'Other'
    })
  }


  //Ok!! lets send the data to the server now!!

  submit = (e) => {
    e.preventDefault();
    //don't mutate state!!!
    let info = Object.assign({}, this.state);
    //don't need selection
    delete info.selection;
    ErsClient.post('reimbs', info)
      .then(res => {
        if (res.status === 200) {
          //delay to give time for refresh
          //fallback to refresh
        }
      })
      .catch(err => {
        //redirect to 404 page if something goes wrong
        window.location.assign('127.0.0.1/404')

      })
      window.setTimeout(()=>{//just waiting for the server 
           window.location.reload()
      },6000)
     
  }

 
  render() {
    return (
      // nothing too complicated, just a modal for the user to fill out
      <>
        <div className="center" id="empbtn"><button data-toggle="modal" data-target="#squarespaceModal" className="btn btn-primary center-block">Create New</button></div>
        <div className="modal fade" id="squarespaceModal" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="lineModalLabel">Revature ERS FORM v0.B1810</h4>
              </div>
              <div className="modal-body">


                <form>
                  <div className="form-group">
                    <label >Amount</label>
                    <input type="text" className="form-control" id="amount" placeholder="Enter amount in decimal form"
                      onChange={this.amountChange} required />
                  </div>
                  <div className="form-group">
                    <label >Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Describe your request"
                      onChange={this.descriptionChange} required />
                  </div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Type of Request
  </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <button className="dropdown-item" type="button"
                        onClick={this.lodging}>Lodging</button>
                      <button className="dropdown-item" type="button"
                        onClick={this.travel}>Travel</button>
                      <button className="dropdown-item" type="button"
                        onClick={this.food}>Food</button>
                      <button className="dropdown-item" type="button"
                        onClick={this.other}>Other</button>
                    </div>
                  </div>

                  <br />
                  <h4>Entry: {this.state.selection}</h4>

                  <div className="form-group">

                    <input type="file" id="receipt" />
                    <h4 className="help-block">Receipt upload currently disabled.</h4>
                  </div>

                  <button type="submit" className="btn btn-default"
                    onClick={this.submit}>Submit</button>


                </form>

              </div>
              <div className="modal-footer">
                <div className="btn-group btn-group-justified" role="group" aria-label="group button">

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}