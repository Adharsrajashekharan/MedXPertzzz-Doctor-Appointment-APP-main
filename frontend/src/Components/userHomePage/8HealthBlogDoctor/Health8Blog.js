import React from 'react'
import "../../../styles/componentStyles/userHome/health8Blog.css";
import Slider from "react-slick";
import BasicCard from "./BasicCard";



  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        NEXT
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        BACK
      </div>
    );
  }











function Health8Blog() {



  


    const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

    responsive: [ 
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const products = [
    {
      id: 1,
      topic: "5 Ways to Burn Calories Without Exercising!",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",

      description:
        "You heard it! Burning calories without exercising! It is possible. And no we’re not going to ask you to take the stairs instead of the elevator, or cycle to work instead of your car.",
    },
    {
      id: 2,
      topic: "5 Ways to Burn Calories Without Exercising!",
      description:
        "You heard it! Burning calories without exercising! It is possible. And no we’re not going to ask you to take the stairs instead of the elevator, or cycle to work instead of your car.",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      topic: "5 Ways to Burn Calories Without Exercising!",
      description:
        "You heard it! Burning calories without exercising! It is possible. And no we’re not going to ask you to take the stairs instead of the elevator, or cycle to work instead of your car.",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      topic: "5 Ways to Burn Calories Without Exercising!",
      description:
        "You heard it! Burning calories without exercising! It is possible. And no we’re not going to ask you to take the stairs instead of the elevator, or cycle to work instead of your car.",

      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },

    {
      id: 5,
      topic: "5 Ways to Burn Calories Without Exercising!",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",

      description:
        "You heard it! Burning calories without exercising! It is possible. And no we’re not going to ask you to take the stairs instead of the elevator, or cycle to work instead of your car.",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      description:
        "You heard it! Burning calories without exercising! It is possible. And no we’re not going to ask you to take the stairs instead of the elevator, or cycle to work instead of your car.",
    },
  ];



  return (
    <div className="healthBlogz ">
      <h1 className="text-center mt-5 mb-5 fs-1 fw-bold">
        READ HEALTH BLOGS FROM OUR EXPERTS
      </h1>

      <div>
        <div style={{ margin: 20 }}>
          {/* <button
            onClick={() => slider?.current?.slickPrev()}
            className="healthButton"
          >
            Prev
          </button>
          <button
            style={{ marginLeft: 20 }}
            onClick={() => slider?.current?.slickNext()}
            className="healthButton"
          >
            Next
          </button> */}
        </div>

        <Slider ref={slider} {...settings}>
          {products?.map((item, index) => {
            console.log("3444", item);

            return <BasicCard item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
}



export default Health8Blog

