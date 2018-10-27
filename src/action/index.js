import fetch from "../api/fetch"


//获取轮播图数据
export function getBillBoards() {
    let url = `https://m.maizuo.com/v4/api/billboard/home?__t=${+new Date()}`;
    return fetch(url);
}



//获取正在上映的数据

export function getNowPayings(page=1,count=5) {
    let url = `https://m.maizuo.com/v4/api/film/now-playing?__t=${+new Date()}&page=${page}&count=${count}`
    return fetch(url);
}


//获取即将上映的数据

export function getCommingSoons(page=1,count=3) {
    let url = `https://m.maizuo.com/v4/api/film/coming-soon?__t=${+new Date()}&page=${page}&count=${count}`
    return fetch(url);
}

//获取电影详情数据

export function getFilmItem(id) {
    let url = `https://m.maizuo.com/v4/api/film/${id}?__t=${+new Date()}`
    return fetch(url);
}
