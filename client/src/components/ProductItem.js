import React,{ Component } from 'react';


export default class ProductItem extends Component {
  constructor(props) {
    super(props)
  }
  handleDelete = () => {
    this.props.deleteItem(this.props.id)
  }
  render() {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.name}</h2>
        </div>
        <div className="mdl-card__actions">
          <button className="mdl-button mdl-js-button mdl-button--raised"
                  onClick={this.handleDelete}>Delete Product</button>
        </div>
      </div>
    )
  }
}
