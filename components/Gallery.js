import React from 'react';
import { Row, Col } from 'antd';

const Gallery = ({thmb1, thmb2, thmb3, thmb4, thmb5}) => (
    <div className="square-container">

  <div className="square">
    <div className="content">
        <a>
        <img src="https://travari.s3-us-west-2.amazonaws.com/images/large-table-rug.jpg" alt=""/>
        </a>
    </div>
  </div>

  <div className="square">
    <div className="content spread">
    <img src="https://travari.s3-us-west-2.amazonaws.com/images/central-rug.jpg"></img>
    </div>
  </div>

  <div className="square">
    <div className="content column">
    <img src="https://travari.s3-us-west-2.amazonaws.com/images/derick-mckinney-hX3SLYPe3f0-unsplash.jpg"></img>
    </div>
  </div>

  <div className="square">
    <div className="content spread">
    <img src="https://travari.s3-us-west-2.amazonaws.com/images/josh-hemsley-NegT3kIxI_k-unsplash.jpg"></img>
    </div>
  </div>

  <div className="square">
    <div className="content column">
    <img src="https://travari.s3-us-west-2.amazonaws.com/images/austin-wehrwein-EZERpkl3Lso-unsplash.jpg"></img>
    </div>
  </div>
  <style jsx>{`
     .square-container {
        display: flex;
        flex-wrap: wrap;
      }
      
      .square {
        position: relative;
        flex-basis: calc(20% - 0px);
        overflow:hidden;
        
      }
      
      .square::before {
        content: '';
        display: block;
        padding-top: 100%;
      }
      
      .square .content {
        position: absolute;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
      }
      img {
          width:100%;
      }
     
     `}</style>
</div>

)

export default Gallery