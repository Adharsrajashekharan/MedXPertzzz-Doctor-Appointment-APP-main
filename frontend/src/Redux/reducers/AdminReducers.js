import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  USERS_DELETE_REQUEST,
  USERS_DELETE_SUCCESS,
  USERS_DELETE_FAIL,
  USERS_EDIT_REQUEST,
  USERS_EDIT_SUCCESS,
  USERS_UPDATE_REQUEST,
  USERS_UPDATE_SUCCESS,
  USERS_UPDATE_FAIL,
  USERS_BLOCK_REQUEST,
  USERS_BLOCK_SUCCESS,
  USERS_BLOCK_FAIL,
  USERS_UNBLOCK_REQUEST,
  USERS_UNBLOCK_FAIL,
  USERS_UNBLOCK_SUCCESS,
  LIST_DOCTORS_REQUEST,
  LIST_DOCTORS_SUCCESS,
  LIST_DOCTORS_FAIL,
} from "../constants/AdminConstants";

export const adminShowUsersReducers = (state = { users: {} }, action) => {
  switch (action.type) {
    case USERS_LIST_REQUEST:
      return { loading: true };
    case USERS_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USERS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminDeleteUsersReducers = (state = {}, action) => {
  switch (action.type) {
    case USERS_DELETE_REQUEST:
      return { loading: true };
    case USERS_DELETE_SUCCESS:
      return { loading: false, users: action.payload };
    case USERS_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminEditUsersReducers = (state = {}, action) => {
  switch (action.type) {
    case USERS_EDIT_REQUEST:
      return { loading: true };
    case USERS_EDIT_SUCCESS:
      return { loading: false, userZ: action.payload };
    case USERS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminUpdateUsersReducers = (state = {}, action) => {
  switch (action.type) {
    case USERS_UPDATE_REQUEST:
      return { loading: true };
    case USERS_UPDATE_SUCCESS:
      return { loading: false, updatedUser: action.payload };
    case USERS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminBlockUsersReducers = (state = {}, action) => {
  switch (action.type) {
    case USERS_BLOCK_REQUEST:
      return { loading: true };
    case USERS_BLOCK_SUCCESS:
      return { loading: false, blockedUser: action.payload };
    case USERS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminunBlockUsersReducers = (state = {}, action) => {
  switch (action.type) {
    case USERS_UNBLOCK_REQUEST:
      return { loading: true };
    case USERS_UNBLOCK_SUCCESS:
      return { loading: false, unblockedUser: action.payload };
    case USERS_UNBLOCK_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const adminListDoctorsReducers = (state = {}, action) => {
  switch (action.type) {
    case LIST_DOCTORS_REQUEST:
      return { loading: true };
    case LIST_DOCTORS_SUCCESS:
      return { loading: false, Doctors: action.payload };
    case LIST_DOCTORS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
