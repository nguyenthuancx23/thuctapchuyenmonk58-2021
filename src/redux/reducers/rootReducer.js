import { combineReducers } from 'redux';

import ToDoListReducer from './ToDoListReducer'
import FakeBookReducer from './FakeBookReducer'
import BaiTapGameBauCuaReducer from './BaiTapGameBauCuaReducer'
import BaiTapGameXucXacReducer from './BaiTapXucXacReducer'
import BaiTapOanTuXiReducer from './BaiTapOanTuXiReducer' 
export const rootReducer = combineReducers({
    ToDoListReducer,
    FakeBookReducer,
    BaiTapGameBauCuaReducer,
    BaiTapGameXucXacReducer, //state BaiTapGame
    BaiTapOanTuXiReducer //state bài tập oan tu xì
})