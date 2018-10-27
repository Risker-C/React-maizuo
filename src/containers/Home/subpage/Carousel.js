import React,{Component} from 'react';
import PropTypes from "prop-types";
import ReactSwipe from "react-swipe"
export default class Carousel extends Component{
    static propTypes  ={
        billBoards: PropTypes.array.isRequired
    }
    render(){
        const options={
            continue:true,
            auto:2000
        }
        return(
            <div>
                <ReactSwipe key={this.props.billBoards.length} className="carousel" swipeOptions={options}>
                    {this.props.billBoards && this.props.billBoards.map(item=>
                        <div  key={item.id} style={{height:"210px"}}>
                            <img src={item.imageUrl} style={{width:"100%"}} alt=""/>
                        </div>
                    )}
                </ReactSwipe>
            </div>
        )
    }
}