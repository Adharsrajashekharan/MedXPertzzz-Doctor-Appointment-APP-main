import React, { useEffect, useState } from "react";
import Layout from "../../pages/Admin/LayoutAdmin";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosConfig from "../../axiosConfig";

function DetailedDoctorverify() {
  let doctorId = useParams();
  const [doctorDetails, setDoctorDetails] = useState("");
  const navigate = useNavigate();

  const DoctorDetailsApiRequest = async (req, res) => {
    try {
      console.log("9948", doctorId.doctorId);
      const { data } = await axiosConfig.get(
        `/api/admin/detailedDoctorsVerifyPage/${doctorId.doctorId}`,
   
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
          },
        }    
      );


      
     


      console.log("345", data);

      const { allDoctorRequest } = data;

      console.log("678", allDoctorRequest);
      setDoctorDetails(allDoctorRequest);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    DoctorDetailsApiRequest();
  }, []);

  const approveDoctorApiRequest = async (docId) => {
    try {
      console.log(2233, docId);

      const { data } = await axiosConfig.patch(
        `/api/admin/approveDoctorAccount/${docId}`
      );

      console.log("xc", data.message.message);

      if (data.message === "Approve As Doctor") {
        console.log(data.message);

        toast.success(data.message);
        navigate("/verifyDoctor");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("something went wrong....");
    }
  };

  const RejectApplyAsDocRequestApi = async (docId) => {
    try {
      console.log(2233, docId);

      const { data } = await axiosConfig.delete(
        `/api/admin/RejectDoctorAccount/${docId}`
      );

      console.log("xc", data.message);

      if (data.message === "Deleted Doctor") {
        console.log(data.message);

        toast.success(data.message);
        navigate("/notifications");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("something went wrong....");
    }
  };

  return (
    <Layout>
      <div className="doctorDetailedDetailsPage">
        <h1 className="text-center pt-3 mb-5">Detailed Doctor Page</h1>

        <div className="doctorDetails">
          <Container>
            <Row>
              <Col md={4}>
                <Image
                  src={
                    doctorDetails?.URLS
                      ? ""
                      : "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                  }
                  className="doctorDimg"
                ></Image>
              </Col>

              <Col md={1}></Col>

              <Col md={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>View Doctor Details</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Field</th>
                            <th>value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                            <tr>
                              <td>DoctorCertificateId</td>
                              <td>{doctorDetails?.DoctorURLS}</td>
                            </tr>

                            <tr>
                              <td>Name</td>
                              <td>
                                {doctorDetails?.firstName} {""}{" "}
                                {doctorDetails?.lastName}
                              </td>
                            </tr>

                            {/* <tr>
                              <td>PhoneNumber</td>
                              <td>{doctorDetails.phoneNumber}</td>
                            </tr> */}

                            <tr>
                              <td>Specialization</td>
                              <td>{doctorDetails?.specialization}</td>
                            </tr>

                            <tr>
                              <td>Experience</td>
                              <td>{doctorDetails?.experience}</td>
                            </tr>

                            <tr>
                              <td>FeePerConsultation</td>
                              <td>{doctorDetails?.feePerCunsultation}</td>
                            </tr>

                            <tr>
                              <td>Timings</td>
                              <td>{doctorDetails?.timings?.[0]} : {doctorDetails?.timings ?.[1]}</td>
                            </tr>

                            <tr>
                              <td>status</td>
                              <td>{doctorDetails?.status}</td>
                            </tr>

                            <tr>
                              <td>Approve Request</td>
                              <td>
                                {
                                  <Button
                                    variant="success"
                                    onClick={() =>
                                      approveDoctorApiRequest(doctorDetails._id)
                                    }
                                  >
                                    Approve
                                  </Button>
                                }
                              </td>
                            </tr>

                            <tr>
                              <td>Delete Request</td>
                              <td>
                                {
                                  <Button
                                    variant="danger"
                                    onClick={() =>
                                      RejectApplyAsDocRequestApi(
                                        doctorDetails._id
                                      )
                                    }
                                  >
                                    Reject
                                  </Button>
                                }
                              </td>
                            </tr>
                          </>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
}

export default DetailedDoctorverify;
