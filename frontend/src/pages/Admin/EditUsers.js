import React, { useEffect, useState } from "react";
import Layout from "../../pages/Admin/LayoutAdmin";
import  "../../styles/componentStyles/Admin/editusers.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import axiosConfig from "../../axiosConfig";

import {
  adminEditUserz,adminUpdateUserz
} from "../../Redux/actions/AdminActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditUsers() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const navigate = useNavigate();

  const userDetails = useSelector(
    (state) => state.adminEditUsers?.userZ?.userDetails
  );

  const updatedUser = useSelector(
    (state) => state.adminUpdateUsers?.updatedUser
  );

  if (updatedUser?.message === "User updated successfully") {
    navigate("/admin/userslist");
    updatedUser.message = "hello";
  }

  var usernames;
  var emails;
  var isAdminz;
  var isDoctors;

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [isDoctor, setIsDoctor] = useState();

  userDetails &&
    userDetails.map((ele) => {
      return (
        (usernames = ele.username),
        (emails = ele.email),
        (isAdminz = ele.isAdmin),
        (isDoctors = ele.isDoctor)
      );
    });

  console.log("157", usernames, emails, isAdminz, isDoctors);

  useEffect(() => {
    dispatch(adminEditUserz(id));
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(adminUpdateUserz(username, email, isAdmin, isDoctor, id));
  };

  return (
    <Layout>
      <div className="editUsers">
        <h1>Edit Users</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group
            className="mb-3 editForm mt-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              defaultValue={emails}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 mt-3  editForm"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              defaultValue={usernames}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-5 checked" controlId="2">
            <Form.Check
              type={"checkbox"}
              id={`default-${"checkbox"}`}
              label={` Is Admin`}
              defaultChecked={isAdminz ? "checked" : ""}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          </Form.Group>
          <Form.Group className="mb-3 checked" controlId="1">
            <Form.Check
              type={"checkbox"}
              id={`default-${"checkbox"}`}
              label={` Is Doctor`}
              defaultChecked={isDoctors ? "checked" : ""}
              onChange={(e) => setIsDoctor(e.target.checked)}
            />
          </Form.Group>
          <Button className="btnzz" variant="warning" type="submit">
            EDIT
          </Button>{" "}
        </Form>
      </div>
    </Layout>
  );
}

export default EditUsers;
