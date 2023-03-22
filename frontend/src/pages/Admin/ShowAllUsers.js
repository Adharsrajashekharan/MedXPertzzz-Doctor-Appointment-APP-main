
import  '../../styles/componentStyles/Admin/showallusers.css'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../pages/Admin/LayoutAdmin";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import {
 adminBlockUserz,
 adminDeleteUserz,
 adminEditUserz,
 adminListDoctors,
 adminShowAllUserz,
 adminUpdateUserz,
 adminunBlockUserz,  
} from "../../Redux/actions/AdminActions";
import Loader from "../../Components/Loading";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { message } from "antd";

function ShowAllUsers() {




  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleClick() {
    setShowConfirmation(true);
  }

  function handleConfirmation() {
    // Do something when the user confirms the action
    setShowConfirmation(false);
  }

  function handleCancel() {
    // Do something when the user cancels the action
    setShowConfirmation(false);
  }











  const dispatch = useDispatch();

  var name = 1;
 

  const adminshowallusers = useSelector((state) => state.adminshowallusers);
  var { loading, users, error } = adminshowallusers;
  const listOfusers = users?.showallusers;

  const adminDeleteUsers = useSelector((state) => state?.adminDeleteUsers);

  var { loading, users, error } = adminDeleteUsers;

  console.log("ommm", users);

  if (users?.message === "deleting userslist successfull") {
    console.log("deleting successfull");
  }


const blockedUser = useSelector((state) => state?.adminBlockUsers?.blockedUser);


const unblockedUser = useSelector(
  (state) => state?.admin_UnBlockUsers?.unblockedUser
);


if(blockedUser){
const {message,success,userDetails}=blockedUser

}

  useEffect(() => {
    dispatch(adminShowAllUserz());
  }, [dispatch, users, blockedUser, unblockedUser]);

  const deleteUser = (userId) => {
    console.log("1sd", userId);

    dispatch(adminDeleteUserz(userId));
  };

  const BlockUserApiRequest = async (userId) => {
    console.log("user: ", userId);

    try {
      dispatch(adminBlockUserz(userId));
    } catch (err) {
      console.log(err);
    }
  };

  const unBlockUserApiRequest = async (userId) => {
    console.log("userm: ", userId);    

    try {
      dispatch(adminunBlockUserz(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Container>
        <div className="m-5">
          <h1 className="text-center mb-5 fs-1 fw-bold">ALL USERS</h1>
          <div>{loading && <Loader />}</div>
          <Table striped bordered hover className="bordered">
            <thead>
              <tr>
                <th>Sl no</th>
                <th>UserName</th>
                <th>email</th>
                <th>isDoctor</th>
                <th>isAdmin</th>
                <th>ProfileImage</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Block/Unblock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {listOfusers?.map((user, idx) => {
                return (
                  <tr>
                    <td style={{ paddingTop: "35px" }}>{idx + 1}</td>
                    <td style={{ paddingTop: "35px" }}>{user.username}</td>
                    <td style={{ paddingTop: "35px" }}>{user.email}</td>
                    <td>
                      {user.isDoctor ? (
                        <i
                          class="fa-solid fa-check text-center mt-4"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          class="fa-solid fa-xmark text-center mt-4 "
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>

                    <td>
                      {user.isAdmin ? (
                        <i
                          class="fa-solid fa-check text-center mt-4"
                          style={{ color: "green" }}
                        ></i>
                      ) : (
                        <i
                          class="fa-solid fa-xmark text-center mt-4 "
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>

                    <td>
                      <img
                        src={user.ProfileImage} 
                        style={{
                          height: "50px",
                          width: "50px",
                          margin: "10px",
                        }}
                      ></img>
                    </td>
                    <td style={{ paddingTop: "30px", paddingLeft: "20px" }}>
                      {" "}
                      <Link to={`/editusers/${user._id}`}>
                        {" "}
                        <Button variant="info">Edit</Button>{" "}
                      </Link>
                    </td>
                    <td style={{ paddingTop: "30px", paddingLeft: "20px" }}>
                      {" "}
                      <Button
                        variant="danger"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </Button>{" "}
                    </td>
                    {/* <td style={{ paddingTop: "30px", paddingLeft: "20px" }}>
  {" "}
  {user.isBlocked ? (
    <Button
      variant="danger"
      // onClick={() => unBlockUserApiRequest(user._id)}
      onClick={handleClick} 
    >
      click To UnBlock
    </Button>
  
  ) : (
    <Button
      variant="warning"
      onClick={() =>  BlockUserApiRequest(user._id)} 
    >
      click To Block
    </Button>
  )}
</td> */}

<td style={{ paddingTop: "30px", paddingLeft: "20px" }}>
  {user.isBlocked ? (
    <Button
    variant="danger"
    onClick={() => {
      confirmAlert({
        title: 'Confirm',
        message: 'Are you sure you want to unblock?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => unBlockUserApiRequest(user._id)
          },
          {
            label: 'No'  
          }
        ]
      });
    }}
  >
    Click To unblock
  </Button>
  ) : (
    <Button
      variant="warning"
      onClick={() => {
        confirmAlert({
          title: 'Confirm',
          message: 'Are you sure you want to block?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => BlockUserApiRequest(user._id)
            },
            {
              label: 'No'
            }
          ]
        });
      }}
    >
      Click To Block
    </Button>
  )}
</td>


                    <td style={{ paddingTop: "30px", paddingLeft: "20px" }}>
                      <h3>
                        {" "}
                        {user.isBlocked ? (
                          <i
                            class="fa-solid fa-xmark text-center mt-4 "
                            style={{ color: "red" }}
                          ></i>
                        ) : (
                          <i
                            class="fa-solid fa-check text-center mt-4"
                            style={{ color: "green" }}
                          ></i>
                        )}
                      </h3>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  );
}

export default ShowAllUsers;