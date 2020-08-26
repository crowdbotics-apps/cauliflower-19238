import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth1294439Reducer from '../features/EmailAuth1294439/redux/reducers';
import SignIn2389887Reducer from '../features/SignIn2389887/redux/reducers'
import SignUp1489886Reducer from '../features/SignUp1489886/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth1294439: EmailAuth1294439Reducer,
SignIn2389887: SignIn2389887Reducer,
SignUp1489886: SignUp1489886Reducer,

});