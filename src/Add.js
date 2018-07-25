import React, {Component} from "react";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            price: "",
            url: ""
        };
        this.submit = this.submit.bind(this);
    }
    submit(event) {
        event.preventDefault();
        this.props.submit(this.state);
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
                    <p><input disabled={this.state.title.length < 4 || this.state.price <= 0} type="submit" value="Create" /></p>
                </form>
            </div>
        )
    }
}

export default Add;