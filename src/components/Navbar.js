import React from "react"
import createBrowserHistory from "history/createBrowserHistory"
import { Link } from 'react-router-dom';
import "../styles/sidebar.css"
import PropTypes from 'prop-types'
const history = createBrowserHistory({
    forceRefresh:true
});

export default class Navbar extends React.Component{
    static propTypes = {
        toggleNav:PropTypes.func.isRequired
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <ul>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to="/"><span>首页</span><i className="iconfont icon-arrow-right"></i></Link>
                        </li>
                        <li onClick={()=>this.props.toggleNav()}>
                            <Link to="/list"><span>影片</span><i className="iconfont icon-arrow-right"></i></Link>
                        </li>
                        <li><span>影院</span><i className="iconfont icon-arrow-right"></i></li>
                        <li><span>商城</span><i className="iconfont icon-arrow-right"></i></li>
                        <li><span>我的</span><i className="iconfont icon-arrow-right"></i></li>
                        <li><span>卖座卡</span><i className="iconfont icon-arrow-right"></i></li>
                    </ul>
                </div>
            </nav>
        )
    }
}