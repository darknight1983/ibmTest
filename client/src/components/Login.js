import React,{ Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    this.props.login(username, password)
  }

  handleChange = (e) => {
     const { name, value } = e.target;
     this.setState({
       [name]: value
     });
     console.log(this.state)
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
        <div className="mdl-card__supporting-text">
          <form onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield">
              <input className="mdl-textfield__input"
                     type="text"
                     name="username"
                     onChange={this.handleChange}/>
                   <label className="mdl-textfield__label" htmlfor="username">Username</label>
           </div>
           <div className="mdl-textfield mdl-js-textfield">
             <input className="mdl-textfield__input"
                    type="text"
                    name="password"
                    type="password"
                    onChange={this.handleChange}/>
                  <label className="mdl-textfield__label" htmlfor="password">Password</label>
          </div>
          <div className="mdl-card__actions">
            <button className="mdl-button mdl-js-button mdl-button--raised"
                    type="submit">
              Submit
            </button>
          </div>
          </form>
        </div>
        </div>
      </div>
    )
  }
}
