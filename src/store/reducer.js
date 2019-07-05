import { combineReducers } from 'redux'; 
import app from './reducers/app'
import mappic from './reducers/map'
export default combineReducers({
    app,mappic
})