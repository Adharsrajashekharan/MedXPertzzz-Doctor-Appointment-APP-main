
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from "../../../Images/applyDoctor2.jpg";
import TestiMonialsDetails from "./TestiMonialsDetails";
import "../../../styles/componentStyles/userHome/doctorList.css";



function DoctorCard() {

const testiMonials = [
  {
    name: "Dr Sibin",
    description:
     "I am superskilled and have an overall experience of 15yrs",
    address: "Gynacolegist",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvetWIU7fNHcUzYeWFHYc8rxxnOXUgYmLQgQ&usqp=CAU",
  },
  {
    name: "Brandon Savage",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    address: "USA",
    img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
  },
  {
    name: "Steve Burns",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    address: "USA",
    img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
  },
  {
    name: "Kevin Canlas",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    address: "USA",
    img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
  },
];
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };


  return (
    <div>
      <section id="testimonial" className="testimonials pt-70 pb-70">
        <div className="container mt-5">
          <h4 className="miniTitle text-center mt-3 mb-4" style={{color:'blue'}}>OUR DOCTORS</h4>
          <div className="text-center ">
            <h3 className="sectionTitle mb-4">Consult With Top Rated Doctors</h3>
          </div>
          <p className="text-center ">
            
          </p>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {testiMonials.length === 0 ? (
                  <div class="item">
                    <div class="shadow-effect">
                      <img class="img-circle" src={userPic} />

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna.
                      </p>
                    </div>
                    <div class="testimonial-name">
                      <h5>Rajon Rony</h5>
                      <small>ITALY</small>
                    </div>
                  </div>
                ) : (
                  testiMonials.map((testiMonialDetail) => {
                    return (
                      <TestiMonialsDetails
                        testiMonialDetail={testiMonialDetail}
                        key={testiMonialDetail._key}
                      />
                    );
                  })
                )}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorCard











