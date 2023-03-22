import { USER_LOGIN, GET_USER_INFO, VIEWALL_DOCTORS_REQUEST, VIEWALL_DOCTORS_SUCCESS, VIEWALL_DOCTORS_FAIL } from "../constants/userConstant";

export const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      console.log("1Rs");

      return {
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
export const ViewAllApprovedDoctorsReducers = (state = {}, action) => {
  switch (action.type) {
    case VIEWALL_DOCTORS_REQUEST:
      return { loading: true };
    case VIEWALL_DOCTORS_SUCCESS:
      return { loading: false, Doctors: action.payload };
    case VIEWALL_DOCTORS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};