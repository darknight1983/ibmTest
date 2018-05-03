import React,{ Component } from 'react';
import ProductItem from './ProductItem.js';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [
        {
          productId: 7869,
          productName: "MacBook Pro",
          pDescription: "This is Apple's most powerful Mac yet.",
          relatedProducts: [ "Apple iPhone", "Apple Watch"]
        },
        {
          productId: 9898,
          productName: "ThinkBook",
          pDescription: "This is Window's most powerful Mac yet.",
          relatedProducts: [ "Apple iPhone", "Apple Watch"]
        }
      ]
    }
  }

  newProduct = (name, description) => {
    // Before the product is added to the state of the component, it should
    // be sent to the server to be saved
  }

  deleteProduct = (productId) => {
    // You need to fire of a function to the server that is going to delete
    // this item from the data store before setting the state in the component
    this.setState({products: this.state.products.filter((product) => (
        product.productId !== productId
    ))})
  }
  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-card__actions">
            <a href="">Add Product</a>
          </div>
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div className="mdl-grid">
            {this.state.products.map((product, i) => (
              <ProductItem key={i}
                           id={product.productId}
                           name={product.productName}
                           description={product.pDescription}
                           deleteItem={this.deleteProduct}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
