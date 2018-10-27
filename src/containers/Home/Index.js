import React from "react"
import Carousel from "./subpage/Carousel";
import CommingSoon from "./subpage/CommingSoon";
import NowPlaying from "./subpage/NowPlaying";
import { getBillBoards, getNowPayings, getCommingSoons } from "../../action";
import "../../styles/film.css"

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            billBoards:[],
            nowPlayings:[],
            comingSoon:[]
        }
    }
    //获取数据
    componentWillMount(){
        //轮播图
        getBillBoards().then(res=>{
            this.setState({
                billBoards: res.data.billboards
            })
        }).catch(err=>{
            console.log(err);
        })

        //正在上映
        getNowPayings().then(res=>{
            this.setState({
                nowPlayings: res.data.films
            })
        }).catch(err=>{
            console.log(err);
        })

        //即将上映

        getCommingSoons().then(res=>{
            this.setState({
                comingSoon: res.data.films
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <Carousel billBoards={this.state.billBoards}/>
                <NowPlaying nowPlayings={this.state.nowPlayings}/>
                <br/>
                <CommingSoon comingSoon={this.state.comingSoon}/>
            </div>
        )
    }
}