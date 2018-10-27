import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./containers/Home/Index";
import Detail from "./containers/Film/Detail";
import List from "./containers/Film/List";
import "./styles/reset.css"
import "./styles/icon.css"
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showNav:false,
            title:"卖座电影",
            
        }

    }
    //获取数据


    //修改showNav
    toggleNav()
    {
        this.setState({
            showNav: !this.state.showNav
        })
    }
  render() {
    return (
      <div>
          <Header title={this.state.title} toggleNav={this.toggleNav.bind(this)}/>
          {this.state.showNav  ?  <Navbar toggleNav={this.toggleNav.bind(this)}/> : ""}
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/list" exact component={List}/>
              <Route path="/detail/:id" exact component={Detail}/>
          </Switch>
      </div>
    );
  }
}
