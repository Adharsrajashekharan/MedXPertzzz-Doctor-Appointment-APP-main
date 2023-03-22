import {GET_USER_INFO,USER_LOGIN, USER_LOGOUT, VIEWALL_DOCTORS_FAIL, VIEWALL_DOCTORS_REQUEST, VIEWALL_DOCTORS_SUCCESS} from '../constants/userConstant'
import axiosConfig from '../../axiosConfig';


export const loginAction = (data) => async (dispatch) => {
  try {
    console.log("1S");
    console.log("data", data);

    dispatch({
      type: USER_LOGIN,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserinfoAction = (data) => async (dispatch) => {
  try {
    console.log("1S");
    console.log("data", data);

    dispatch({
      type: GET_USER_INFO,
      payload: data,
    });

    console.log("zzzz");
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("doctorAppToken");
   localStorage.removeItem("userData");
  dispatch({ type: USER_LOGOUT });
};



export const ViewAllApprovedDoctors = () => async (dispatch, getState) => {
  try {
    console.log("xc");

    dispatch({
      type: VIEWALL_DOCTORS_REQUEST,
    });

   


 const { data } = await axiosConfig.get(
   `/api/users/getAllApprovedDoctors`,
   
   {
     headers: {
       Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
     },
   }
 );


    dispatch({
      type: VIEWALL_DOCTORS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: VIEWALL_DOCTORS_FAIL,
      payload: message,
    });
  }
};