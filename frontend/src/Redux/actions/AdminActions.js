import axios from "axios";
import { useDispatch } from "react-redux";
import axiosConfig from "../../axiosConfig";

import {
  USERS_LIST_REQUEST,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAIL,
  USERS_DELETE_REQUEST,
  USERS_DELETE_SUCCESS,
  USERS_DELETE_FAIL,
  USERS_EDIT_REQUEST,
  USERS_EDIT_SUCCESS,
  USERS_EDIT_FAIL,
  USERS_UPDATE_REQUEST,
  USERS_UPDATE_SUCCESS,
  USERS_UPDATE_FAIL,
  USERS_BLOCK_FAIL,
  USERS_BLOCK_REQUEST,
  USERS_BLOCK_SUCCESS,
  USERS_UNBLOCK_FAIL,
  USERS_UNBLOCK_REQUEST,
  USERS_UNBLOCK_SUCCESS,
  LIST_DOCTORS_REQUEST,
  LIST_DOCTORS_SUCCESS,
  LIST_DOCTORS_FAIL,
} from "../constants/AdminConstants";

export const adminShowAllUserz = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USERS_LIST_REQUEST,
    });

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("doctorAppToken"),
      },
    };

    const { data } = await axiosConfig.get(`/api/admin/showUserList`, config);

    console.log("234", data);

    dispatch({
      type: USERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USERS_LIST_FAIL,
      payload: message,
    });
  }
};

export const adminDeleteUserz = (userId) => async (dispatch, getState) => {
  try {
    console.log("xc");

    dispatch({
      type: USERS_DELETE_REQUEST,
    });

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("doctorAppToken"),
      },
    };

    const { data } = await axiosConfig.delete(
      `/api/admin/deleteUsers/${userId}`,
      config
    );

    dispatch({
      type: USERS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USERS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const adminEditUserz = (userId) => async (dispatch, getState) => {
  try {
    console.log("xc");

    dispatch({
      type: USERS_EDIT_REQUEST,
    });

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("doctorAppToken"),
      },
    };

    const { data } = await axiosConfig.get(`/api/admin/users/${userId}`, config);

    dispatch({
      type: USERS_EDIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USERS_EDIT_FAIL,
      payload: message,
    });
  }
};

export const adminUpdateUserz =
  (username, email, isAdmin, isDoctor, userId) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: USERS_UPDATE_REQUEST,
      });

      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("doctorAppToken"),
        },
      };

      axiosConfig
        .patch(
          `/api/admin/updateUser/${userId}`,
          {
            username: username,
            email: email,
            isAdmin: isAdmin,
            isDoctor: isDoctor,
          },
          config
        )
        .then((response) => {
          console.log("User updated successfully", response.data);

          dispatch({
            type: USERS_UPDATE_SUCCESS,
            payload: response.data,
          });
        })
        .catch((error) => {
          console.error("Error updating user", error);
        });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: USERS_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const adminBlockUserz = (userId) => async (dispatch, getState) => {
  try {
    console.log("xc",userId);

    dispatch({
      type: USERS_BLOCK_REQUEST,
    }); 

   


    
      const { data } = await axiosConfig.patch(
        `/api/admin/block/${userId}`,
        { token: localStorage.getItem("doctorAppToken") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }
      );







    dispatch({
      type: USERS_BLOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {

    console.log("actionFail",error)

    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USERS_BLOCK_FAIL,
      payload: message,
    });
  }
};

export const adminunBlockUserz = (userId) => async (dispatch, getState) => {
  try {
 

    dispatch({
      type: USERS_UNBLOCK_REQUEST,
    });

   

    const { data } = await axiosConfig.patch(
      `/api/admin/unblock/${userId}`,
      { token: localStorage.getItem("doctorAppToken") },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
        },
      }
    );

    dispatch({
      type: USERS_UNBLOCK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: USERS_UNBLOCK_FAIL,
      payload: message,
    });
  }
};

export const adminListDoctors = (userId) => async (dispatch, getState) => {
  try {
    console.log("xc");

    dispatch({
      type: LIST_DOCTORS_REQUEST,
    });

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("doctorAppToken"),
      },
    };

    const { data } = await axios.get(`/api/admin/verifyDoctor`, config);

    dispatch({
      type: LIST_DOCTORS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: LIST_DOCTORS_FAIL,
      payload: message,
    });
  }
};
