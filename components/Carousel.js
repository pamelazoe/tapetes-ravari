import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';


class Slides extends Component {
  constructor(props) {
    super(props);
  }
    render(){
      const settings = {
        dots: true,
        autoplay: false,
        accessibility:true,
        draggable:true,
        infinite:true,
        centerMode: true,
        // centerPadding: "180px",
        slidesToShow: 1
      };
      return(
        <div className="carousel" style={{height:"60%"}}>
          <Carousel {...settings}>
            <div><img src={this.props.img1} style={{position:"relative", top:"-10rem", width:"110vw"}} alt=""/></div>
            <div><img src={this.props.img2} style={{ width:"110vw", position:"relative", top:"-60rem"}} alt=""/></div>
            <div><img src={this.props.img3} style={{height:"50rem", position:"relative", top:"-10rem"}} alt=""/></div>
            {/* <div><img src="https://travari.s3-us-west-2.amazonaws.com/images/helen-thomas-THefbtvPmU4-unsplash.jpg" style={{height:"50rem", position:"relative", top:"-10rem"}} alt=""/></div> */}
          </Carousel>
          <style global jsx>{`
        .ant-carousel .slick-slide {   
          display: flex;
          justify-content:center;
          text-align: center;
          height: 88vh;
          line-height: 160px;
          background: #000000;
          overflow: hidden;
        }
   
        .ant-carousel .slick-dots li button{
          width: 20px;
          height: 20px;
          border-radius:100%;
          display:flex;
          margin:15px;
        }
        .ant-carousel .slick-dots li.slick-active button {
          width: 20px;
          background: #fff;
          opacity: 1;
          margin:15px;
        }
        .ant-carousel .slick-dots-bottom {
          bottom: 5rem;
          z-index:150000;
        }
        .slick-dots slick-dots-bottom {
          display: flex;
          justify-content: center;
        }
        .ant-carousel .slick-dots li button:hover, .ant-carousel .slick-dots li button:focus {
          margin:15px;
        }   
        .ant-carousel img {
          opacity:.5
        }
     
      `}</style>
        </div>
      );
    }
  }
export default Slides