import React, {Component} from "react";

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.product.title,
            price: props.product.price,
            url: props.product.url,
            id: props.product.id
        };
        this.submit = this.submit.bind(this);
        this.delete = this.delete.bind(this);
    }
    submit(event) {
        event.preventDefault();
        this.props.submit(this.state);
        this.props.history.push("/products");
    }
    delete() {
        this.props.delete(this.props.product.id);
        this.props.history.push("/products");
    }
    render() {
        return (
            <div>
                <h3>Create a New Product</h3>
                <form onSubmit={this.submit}>
                    <p>Title: <input type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})} /></p>
                    <p>Price: <input type="number" min={0} value={this.state.price} onChange={event => this.setState({price: event.target.value})} /></p>
                    <p>Image Url: <input type="text" value={this.state.url} onChange={event => this.setState({url: event.target.value})} /></p>
                    <p><button type="button" onClick={this.delete}>Delete</button> <input disabled={this.state.title.length < 4 || this.state.price <= 0} type="submit" value="Update" /></p>
                </form>
            </div>
        )
    }
}

export default Edit;