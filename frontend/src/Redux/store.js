import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {adminBlockUsersReducers,adminDeleteUsersReducers,adminEditUsersReducers,adminListDoctorsReducers,adminShowUsersReducers,adminUpdateUsersReducers,adminunBlockUsersReducers} from '../Redux/reducers/AdminReducers'
import {
  generalReducers,
 
} from "./reducers/generalReducer";

import {loginReducers,ViewAllApprovedDoctorsReducers} from './reducers/userReducers'


// import { ViewAllApprovedDoctorsReducers } from "./redux/reducers/usersReducer";

const reducer = combineReducers({
  general: generalReducers,
  userlogin: loginReducers,
  // adminInfo: AdminInfoReducers,
  adminshowallusers: adminShowUsersReducers,
  adminDeleteUsers: adminDeleteUsersReducers,
  adminEditUsers: adminEditUsersReducers,
  adminUpdateUsers: adminUpdateUsersReducers,
  adminBlockUsers: adminBlockUsersReducers,
  admin_UnBlockUsers: adminunBlockUsersReducers,
  viewAllDoctors:ViewAllApprovedDoctorsReducers
 
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
