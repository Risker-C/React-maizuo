import React from "react"
import "../styles/navbar.css"
export default class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="navbar-left" onClick={()=>this.props.toggleNav()}>
                    <div className="bar">
                        <i className="iconfont icon-list"></i></div>
                    <h1>卖座电影</h1></div>
                <div className="navbar-right">
                    <div className="city">北京<i className="iconfont icon-dropdown"></i></div>
                    <div className="user"><i className="iconfont icon-user"></i></div>
                </div>
            </header>
        )
    }
}