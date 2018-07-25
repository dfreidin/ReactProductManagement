import React, {Component} from "react";

class Product extends Component {
    render() {
        return (
            <div style={{border: "solid black", margin: "10px", padding: "5px"}}>
                {this.props.product.url && <img src={this.props.product.url} alt={this.props.product.title} />}
                <p>{this.props.product.title}</p>
                <p>${parseFloat(this.props.product.price).toFixed(2)}</p>
                <p>
                    <button onClick={() => this.props.history.push(`/edit/${this.props.product.id}`)}>Edit</button>
                    <button onClick={() => this.props.delete(this.props.product.id)}>Delete</button>
                </p>
            </div>
        )
    }
}

export default Product;