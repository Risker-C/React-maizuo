import React,{Component} from 'react';
import PropTypes from "prop-types";
import FilmItem from "./FilmItem";
export default class CommingSoon extends Component{
    static propTypes  ={
        comingSoon:PropTypes.array.isRequired
    }
    render(){
        return(
            <div className="comeing-soon" style={{listStyleType:"none"}}>
                {this.props.comingSoon && this.props.comingSoon.map(item=>
                    <FilmItem film={item} key={item.id}/>
                )}
            </div>
        )
    }
}