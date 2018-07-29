import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE, DATA_FIND } from "../actions/" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true };
 
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { error: action.error });
            return state;
        case DATA_FIND:
            state = Object.assign({}, state, { 
                error: action.error, 
                mainList: action.docs
            });
            return state;
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;
