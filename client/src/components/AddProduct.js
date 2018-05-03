import React,{ Componet } from 'React';

export default class AddProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productName: '',
      pDescription: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [name]: value
    })
  }
  
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl_card__supporting-text">
            <form onSubmit={}>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input"
                       type="text"
                       name="productName"
                       onChange={this.handleChange}/>
                     <label className="mdl-textfield__label" htmlfor="productName">Product Name</label>
             </div>
             <div className="mdl-textfield mdl-js-textfield">
               <input className="mdl-textfield__input"
                      type="text"
                      name="pDescription"
                      onChange={this.handleChange}/>
                    <label className="mdl-textfield__label" htmlfor="pDescription">Username</label>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
