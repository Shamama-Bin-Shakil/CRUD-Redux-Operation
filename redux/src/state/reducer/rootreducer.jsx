import { combineReducers } from "redux";
import noteReducer from "../reducer/notereducer";
const rootReducer = combineReducers({
  noteReducer: noteReducer,
});
export default rootReducer;
