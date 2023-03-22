// import { Button, Col, Form, Input, Row, TimePicker } from "antd";
// import moment from "moment";
// import React from "react";
// import Footers from "../../userHomePage/Footer9/Footers";
// import { Upload } from 'antd';




// function DoctorForm({ onFinish, initivalValues }) {



 

//   return (
//     <Form
//       layout="vertical"
//       onFinish={onFinish}
//       initialValues={{
//         ...initivalValues,
//         ...(initivalValues && {
//           timings: [
//             moment(initivalValues?.timings[0], "HH:mm"),
//             moment(initivalValues?.timings[1], "HH:mm"),
//           ],
//         }),
//       }}
//     >
//       <h1 className="card-title mt-3">Personal Information</h1>
//       <Row gutter={20}>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="First Name"
//             name="firstName"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="First Name" />
//           </Form.Item>
//         </Col>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Last Name"
//             name="lastName"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Last Name" />
//           </Form.Item>
//         </Col>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Phone Number"
//             name="phoneNumber"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Phone Number" />
//           </Form.Item>
//         </Col>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Website"
//             name="website"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Website" />
//           </Form.Item>
//         </Col>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Address"
//             name="address"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Address" />
//           </Form.Item>
//         </Col>
//       </Row>
//       <hr />
//       <h1 className="card-title mt-3">Professional Information</h1>
//       <Row gutter={20}>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Specialization"
//             name="specialization"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Specialization" />
//           </Form.Item>
//         </Col>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Experience"
//             name="experience"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Experience" type="number" />
//           </Form.Item>
//         </Col>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Fee Per Cunsultation"
//             name="feePerCunsultation"
//             rules={[{ required: true }]}
//           >
//             <Input placeholder="Fee Per Consultation" type="number" />
//           </Form.Item>
//         </Col>
//         <Col span={8} xs={24} sm={24} lg={8}>
//           <Form.Item
//             required
//             label="Timings"
//             name="timings"
//             rules={[{ required: true }]}
//           >
//             <TimePicker.RangePicker format="HH:mm" />
//           </Form.Item>
//         </Col>
//       </Row>

//       <div className="d-flex justify-content-end">
//         <Button className="primary-button applyDocBtn fs-2 fw-bold text-white bg-success" htmlType="submit" style={{height:'75px',width:"300px",}}>
//           SUBMIT
//         </Button>

//         <div style={{height:'200px'}}>
            
//         </div>

       
//       </div>
//     </Form>
//   );
// }

// export default DoctorForm;



import React, { useState } from "react";
import { DatePicker, Checkbox } from "antd";
import dayjs from 'dayjs';
import  '../../../styles/componentStyles/user/doctorForm.css'
import "../../../styles/componentStyles/userapplyasdoctor.css";
import { Button, Col, Form, Input, Row } from "antd";
import { TimePicker } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, HideLoading } from "../../../Redux/actions/generalActions";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";
import Container from "react-bootstrap/esm/Container";
import axiosConfig from "../../../axiosConfig";
import { storage_bucket } from "../../../firebase";
import { uploadBytesResumable, ref, uploadBytes, getDownloadURL } from "firebase/storage";








function DoctorForm({ onFinish, initivalValues }) {


  const userInfo = useSelector((state) => state.userlogin?.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const { RangePicker } = DatePicker;
  const [to, setTo] = useState();
  const [from, setFrom] = useState()
  const [totalHours, setTotalHours] = useState(0);
  const [image, setImage] = useState([]);
  const [cimage, setCimage] = useState([]);
  const [URLS, setURL] = useState();
  const [DoctorURLS,setDoctorURL] = useState();






  const handleFormSubmit = async(e) => {
    e.preventDefault();
  console.log("pro",e);
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
   
    values.from = from; 
    values.to = to;
   
     values.timings = [from, to];
      
     console.log("oz",values)


      try {
        dispatch(showLoading());

        
          console.log("o5uu5z",URLS)

        const response = await axiosConfig.post(


          "/api/users/apply-doctor-account",
          {
            URLS,
            DoctorURLS,
            ...values,
            userId: userInfo?._id,
            
            
            
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`,
            },
          }
        );
        dispatch(HideLoading());
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/successapplyfordoctor");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(HideLoading());
        console.log("2111",error)
        toast.error("Something went wrong");
      }

  };
  
  

  function selectTimeSlots(values) {
    console.log(values);
    console.log(values[0].format(" HH:mm"));
    console.log(values[1].format("HH:mm"));
    setFrom(values[0].format(" HH:mm"));
    setTo(values[1].format(" HH:mm"));
    setTotalHours(values[1].diff(values[0], "hours"));
  }
  
  
//   const handleImage = (e) =>{
//     const file = e.target.files[0];
  
//     setFileToBase(file);
//     console.log(file);
// }

// const handleCimage = (e) =>{
//   const file = e.target.files[1];

//   setcFileToBase(file);
//   console.log(file);
// }

// const setcFileToBase = (file) =>{
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onloadend = () =>{
//       setCimage(reader.result);
//   }

// }



// const setFileToBase = (file) =>{
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () =>{
//         setImage(reader.result);
//     }

// }
const handleImage = (e) => {
    const file = e.target.files[0];

    setFileToBaseone(file);
    console.log(file);


    let fileRef=ref(storage_bucket,"ProfilePics/" + file.name);

    const uploadTask=uploadBytesResumable(fileRef,file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {

        const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log('uploadProgress',progress);


        if (progress === 100) {
          console.log(file.name);
          //to get back the link....
          getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
            console.log(URL);
            if (URL) {
              console.log("in!!!!");
              setURL(URL);
             
            }
          });
        }

      })
  
  };


  const setFileToBaseone = (file) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{
        setImage(reader.result);
    }

}




  const handleCimage = (e) => {
    const filez = e.target.files[0];

    setFileToBasetwo(filez);
    console.log("54443",filez);


    let fileRef=ref(storage_bucket,"doctorCertificate/" + filez.name);

    const uploadTask=uploadBytesResumable(fileRef,filez);

    uploadTask.on(
      "state_changed",
      (snapshot) => {

        const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log('uploadProgress2',progress);


        if (progress === 100) {
          console.log(filez.name);
          //to get back the link....
          getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
            console.log("kkkkkkk",URL);
            if (URL) {
              console.log("in!!!!");
              setDoctorURL(URL);
             
            }
          });
        }







      })
  };


 
  const setFileToBasetwo = (filez) =>{
    const readers = new FileReader();
    readers.readAsDataURL(filez);
    readers.onloadend = () =>{
        setCimage(readers.result);
    }

}

const [firstName, setFirstName] = useState('');
const [firstNameError, setFirstNameError] = useState('');



const [lastName, setLastName] = useState('');
const [lastNameError, setLastNameError] = useState('');


const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [specialization, setSpecialization] = useState('');
  const [specializationError, setSpecializationError] = useState('');

  const [experience, setExperience] = useState("");
  const [experienceError, setExperienceError] = useState("");


  const [website, setWebsite] = useState('');
  const [websiteError, setWebsiteError] = useState('');



  const [fee, setFee] = useState("");
  const [feeError, setFeeError] = useState("");



  function handleInputChangeW(event) {
    const value = event.target.value;
    setWebsite(value);
    setWebsiteError(validateWebsite(value));
  }



  function validateWebsite(website) {
    if (!website) {
      return "Website is required";
    }
    if (!/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(website)) {
      return "Please enter a valid website address starting with 'http://' or 'https://'";
    }
    return "";
  }




 



  const 
  handleInputChangeEE = (event) => {
    const value = event.target.value;
    if (value < 0) {
      setExperienceError("experience must be a positive number.");
      setExperience(0);
    } else {
      setExperienceError("");
      setExperience(value);
    }
  };



  const handleInputChangeF = (event) => {
    const value = event.target.value;
    if (value < 0) {
      setFeeError("Fee per consultation must be a positive number.");
      setFee(0);
    } else {
      setFeeError("");
      setFee(value);
    }
  };


function  validateFirstName(firstName) {
  if (!firstName) {
    return "First name is required";
  }
  if (!/^[A-Za-z]+$/.test(firstName)) {
    return "Please enter a valid first name";
  }
  return "";
}


function validateLastName(lastName) {
  if (!lastName) {
    return "last name is required";
  }
  if (!/^[A-Za-z]+$/.test(lastName)) {
    return "Please enter a valid last name";
  }
  return "";
}



function handleInputChange(event) {
  const value = event.target.value;
  setFirstName(value);
  setFirstNameError(validateFirstName(value));
}


function handleInputChanges(event) {
  const value = event.target.value;
  setLastName(value);
  setLastNameError(validateLastName(value));
}



function handleInputChangess(event) {
  const value = event.target.value;
  setSpecialization(value);
  setSpecializationError(validateSpecialization(value));
}


  function handleInputChangek(event) {
    const value = event.target.value;
    setPhoneNumber(value);
    // setPhoneNumberError(validatePhoneNumber(value));
  }


  // function validatePhoneNumber(phoneNumber) {
  //   if (!phoneNumber) {
  //     return "Phone number is required";
  //   }
  //   if (!/^[0-9]{10}$/.test(phoneNumber)) {
  //     return "Please enter a valid 10-digit phone number";
  //   }
  //   return "";
  // }




  function  validateSpecialization(specialization) {
    if (!specialization) {
      return "specialization is required";
    }
    if (!/^[A-Za-z]+$/.test(specialization)) {
      return "Please enter specialized field only";
    }
    return "";
  }






 


  function validateFirstName(firstName) {
    if (!firstName) {
      return "First name is required";
    }
    if (!/^[A-Za-z]+$/.test(firstName)) {
      return "Please enter a valid first name";
    }
    return "";
  }
  

  return (
    <form encType="multipart/form-data" onSubmit={handleFormSubmit}>
      <div className="grid-container">
      <div>

      <h1 className="card-title mt-3">Personal Information</h1>
      


      <div>
      <label htmlFor="firstName" >First Name</label>
      <input 
        type="text" 
        id="firstName" 
        name="firstName" 
        required 
        placeholder="First Name" 
        pattern="[A-Za-z]+" 
        value={firstName} 
        onChange={handleInputChange} 
      />
      <span className={firstNameError ? "error-message" : "hidden"} style={{color:'red'}}>{firstNameError}</span>
    </div>



    
      <div>
        <label>Last Name</label>


        <input 
        type="text" 
        id="lastName" 
        name="lastName" required placeholder="Last Name" 
        pattern="[A-Za-z]+" 
        value={lastName} 
        onChange={handleInputChanges} 
      />
      <span className={lastNameError ? "error-message" : "hidden"} style={{color:'red'}}>{lastNameError}</span>
    </div>

      <div>
      <label htmlFor="website">Website</label>
      <input 
        type="url" 
        id="website" 
        name="website" 
        required 
        placeholder="https://example.com" 
        value={website} 
        onChange={handleInputChangeW} 
      />
      <span className={websiteError ? "error-message" : "hidden"} style={{color:'red'}}>{websiteError}</span>
    </div>




      <div>
        <label>Address</label>
        <input type="text" name="address" required placeholder="Address" />
        <input type="text" name="city" required placeholder="City" />
        <input type="text" name="state" required placeholder="State" />
        <input type="text" name="zipCode" required placeholder="Zip Code" />
      </div>
      <hr />
      </div>
      <div>
      <h1 className="card-title mt-3">Professional Information</h1>
      <div>
        <label>Specialization</label>
        <input 
        type="text" name="specialization" required placeholder="Specialization"
        id="specialization"
        pattern="[A-Za-z]+" 
        value={specialization} 
        onChange={handleInputChangess} 
      />
      <span className={specializationError ? "error-message" : "hidden"} style={{color:'red'}}>{specializationError}</span>
      </div>
      <div>
        <label>Experience</label>
        <input
          type="number"
          name="experience"
          required
          placeholder="Experience"
          onChange={handleInputChangeEE}
          value={experience}
         
        />
  {experienceError && <span style={{ color: "red" }}>{experienceError}</span>}
        
      </div>
      <div>
        <label>Fee Per Consultation</label>
        <input
          type="number"
          name="feePerCunsultation"
          value={fee}
          onChange={handleInputChangeF}
          required
          placeholder="Fee Per Consultation"
        />
        {feeError && <span style={{ color: "red" }}>{feeError}</span>}
      </div>


  <RangePicker
  className="mx-4 mb-4 p-5 fw-bold"
  picker="time"
  format="HH:mm"
  onChange={selectTimeSlots}
/>

<div className="form-outline mb-4">
                <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
                <label className="form-label" htmlFor="form4Example2">Image</label>
            </div>

            <img className="img-fluid" src={image} alt="" />


            <div className="form-outline mb-4">
                <input onChange={handleCimage}  type="file" id="cformupload" name="Cimage" className="form-control"  />
                <label className="form-label" htmlFor="form4Example2">DoctorCertificate</label>
            </div>

            <img className="img-fluid" src={cimage} alt="" />

            </div>

      
      <div className="d-flex justify-content-center">
        <button type="submit" className="primary-button applyDocBtn fs-2 fw-bold text-white bg-success" style={{height:'75px',width:"300px"}}>
          SUBMIT
        </button>

      </div>
      </div>
    </form>
  );
}


export default DoctorForm;








// import { toast } from 'react-toastify';
//  import { useState } from 'react';
//  import axiosConfig from "../../../axiosConfig";

// const DoctorForm = () => {

//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     // const [price, setPrice] = useState('');
//     const [category, setCategory] = useState('');
//     const [bookedTimeSlots, setbookedTimeSlots] = useState([])
//     const [image, setImage] = useState([]);
// const [rentPerHour, setrentPerHour] = useState('')
// const [capacity, setcapacity] = useState('')
// const [fuelType, setfuelType] = useState('')
//     //categories from the backend


    
//     //handle and convert it in base 64
//     const handleImage = (e) =>{
//         const file = e.target.files[0];
//         setFileToBase(file);
//         console.log(file);
//     }

//     const setFileToBase = (file) =>{
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () =>{
//             setImage(reader.result);
//         }

//     }
    
//     const submitForm = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axiosConfig.post('/api/users/apply-doctor-account', {
//             name,
//             description,
//             image,
//             rentPerHour,
//             capacity,
//             fuelType,
//             bookedTimeSlots
//           }, {
            
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("doctorAppToken")}`
//             }
//           });
//           console.log(response.data);
//           setName('');
//           setDescription('');
//           setCategory('');
//           setImage('');
//           setrentPerHour('');
//           setcapacity('');
//           setfuelType('');
//           setbookedTimeSlots('');
//           toast.success('product created successfully');
//         } catch (error) {
//           console.error(error);
//         }
//       };
//   return (
//    <>

//      <div className="container custom_class">
//         <h2 className="signup_title " style={{textAlign:'center',paddingTop:"90px"}}>ADD CAR</h2>
//         <form className=" col-sm-6 offset-3 pt-5 signup_form " encType="multipart/form-data" onSubmit={submitForm}>
            
//             <div className="form-outline mb-4">
//                 <input onChange={(e)=>setName(e.target.value)} type="text" id="form4Example1" className="form-control"  value={name}/>
//                 <label className="form-label" htmlFor="form4Example1">Name</label>
//             </div>


//             <div className="form-outline mb-4">
//                 <textarea  onChange={(e)=>setDescription(e.target.value)}   type="text" id="form4Example2" className="form-control"  value={description}/>
//                 <label className="form-label" htmlFor="form4Example2">Description </label>
//             </div>

           

//             <div className="form-outline mb-4">
//                 <input  onChange={(e)=>setrentPerHour(e.target.value)}  type="number" id="form4Example4" className="form-control"   value={rentPerHour}/>
//                 <label className="form-label" htmlFor="form4Example2">Rent per hour </label>
//             </div>

//             <div className="form-outline mb-4">
//                 <input  onChange={(e)=>setcapacity(e.target.value)}  type="number" id="form4Example4" className="form-control"   value={capacity}/>
//                 <label className="form-label" htmlFor="form4Example2">capacity </label>
//             </div>

//             <div className="form-outline mb-4">
//                 <input  onChange={(e)=>setfuelType(e.target.value)}  type="text" id="form4Example4" className="form-control"   value={fuelType}/>
//                 <label className="form-label" htmlFor="form4Example2">fuelType </label>
//             </div>

//             <div className="form-outline mb-4">
//                 <input onChange={handleImage}  type="file" id="formupload" name="image" className="form-control"  />
//                 <label className="form-label" htmlFor="form4Example2">Image</label>
//             </div>

//             <img className="img-fluid" src={image} alt="" />
//             <button  type="submit" className="btn btn-primary btn-block mb-4">Create</button>
            
//          </form>
//     </div> 
//    </>
//   )
// }

// export default DoctorForm
