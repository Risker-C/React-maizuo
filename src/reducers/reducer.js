import {combineReducers} from "redux"
import films from './films';
import loading from './loading';

//合并
const reducer = combineReducers({
    films,
    loading
})

//导出
export default reducer;