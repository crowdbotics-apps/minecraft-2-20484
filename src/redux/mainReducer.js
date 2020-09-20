import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth104488Reducer from '../features/EmailAuth104488/redux/reducers';
import CalendarView104486Reducer from '../features/CalendarView104486/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth104488: EmailAuth104488Reducer,
CalendarView104486: CalendarView104486Reducer,

});