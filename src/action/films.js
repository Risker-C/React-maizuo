//loading
export function toggleLoading(flag){
    return{
        type:"TOGGLE_LOADING",
        flag
    }
}

//加载电影
export function setFilm(films){
    return{
        type:"SET_FILM",
        films
    }
}

//请求数据
export function getFilms(){
    let url="http://m.maizuo.com/v4/api/film/now-playing?__t=1508226688527&page=1&count=10";
    // dispatch(toggleLoading(true))
    // fetch(url).then(res=>res.json).then(json=>{
    //     dispatch(setFilm(json.data.films));
    //     dispatch(toggleLoading(false))
    // }).catch(error=>{
    //     console.log(error);
    //     dispatch(toggleLoading(false))
    // })
}