import { combineReducers } from 'redux-immutable'
import {reducer as headerRducer} from '../common/header/store/'


const reducer=combineReducers({
	header:headerRducer
});

export default reducer;