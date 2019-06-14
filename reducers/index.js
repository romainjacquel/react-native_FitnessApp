import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthentificationReducer from './authentification'

const rootReducer = combineReducers({
    form : formReducer,
    authentification : AuthentificationReducer
})

export default rootReducer;
