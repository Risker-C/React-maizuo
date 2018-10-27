import React,{Component} from 'react';
import PropTypes from "prop-types"
import createBrowserHistory from "history/createBrowserHistory"
const history = createBrowserHistory({
    forceRefresh:true
})

export default class FilmItem extends Component{
    static propTypes={
        film:PropTypes.object.isRequired
    }
    render(){
        return(
            <div>
                <li style={{margin:"17px 0"}} onClick={()=>history.push(`/detail/${this.props.film.id}`)}>
                    <img src={this.props.film.cover && this.props.film.cover.origin}/>
                    <div className="info">
                        <div>
                            <h2>{this.props.film.name}</h2>
                            {this.props.film.isNowPlaying?
                                <p>{this.props.film.cinemaCount}家上映 {this.props.film.watchCount}人购票</p>:""
                            }
                        </div>
                        <strong>{this.props.film.isNowPlaying ? this.props.film.grade : this.props.film.premiereAt}</strong>
                    </div>
                </li>
            </div>
        )
    }
}