import React, {Component} from "react";
import Product from "./Product";

class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Products List</h3>
                {this.props.products.map(product => <Product key={product.id} product={product} delete={this.props.delete} history={this.props.history} />)}
            </div>
        )
    }
}

export default ProductList;