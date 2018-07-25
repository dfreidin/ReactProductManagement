import React, { Component } from 'react';
import "react-router";
import {
  Link,
  Route,
  BrowserRouter
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Add from './Add';
import ProductList from './ProductList';
import Edit from './Edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.nextID = 0;
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
  }
  add(product) {
    let {title, price, url} = product;
    this.setState(prev => {return {
      products: [...prev.products, {
        title,
        price,
        url,
        id: this.nextID++
      }]
    }});
  }
  delete(id) {
    this.setState(prev => {return {
      products: prev.products.filter(p => p.id !== id)
    }});
  }
  edit(product) {
    let {id, title, price, url} = product;
    this.setState(prev => {return {
      products: prev.products.map(p => p.id === id ? {title, price, url, id} : p)
    }});
  }
  render() {
    return (
      <div className="App">
        <h1>PPM - Project Product Management</h1>
        <BrowserRouter>
          <div>
            <p><Link to="/">Home</Link> | <Link to="/products">Product List</Link> | <Link to="/new">Product Creation</Link></p>
            <Route exact path="/" component={Home} />
            <Route path="/new" render={(props) => <Add {...props} submit={this.add} />} />
            <Route path="/products" render={(props) => <ProductList {...props} products={this.state.products} delete={this.delete} />} />
            <Route path="/edit/:id" render={(props) => <Edit {...props} product={this.state.products.filter(p => p.id == props.match.params.id)[0]} submit={this.edit} delete={this.delete} />} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
