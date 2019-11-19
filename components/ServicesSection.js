import { Card, Col, Row, Divider, Typography } from "antd";
const { Title } = Typography;

const ServicesSection = ({
  sectionHeader,
  cleaningHeader,
  repairHeader,
  saleHeader,
  cleaningContent,
  repairContent,
  saleContent
}) => (
    <div className="service-section">
  <Row
      type="flex"
      justify="center"
      align="middle"
      style={{
        marginTop: "30px",
        marginBottom: "1rem",
        width: "100%",
        height: "10rem",
        overflow: "hidden"
      }}
    >
        <Col span={2}></Col>
        <Col span={10}></Col>
        <Col span={10}>
          <div className="header-section">{sectionHeader}</div>
          <Row type="flex" justify="end">
            <Col
              span={23}
              push={6}
              style={{
                backgroundImage:
                  "-webkit-linear-gradient(0deg, #e8e7e1 55%, #7e764f 55%)",
                minHeight: "4px",
                maxHeight: " 4px",
                width:"76%"
              }}
            ></Col>
          </Row>
        </Col>
      <Col span={2}></Col>
    </Row>
  <Row type="flex" justify="space-between" style={{ width: "100%" }}>
    <Col span={2}></Col>
    <Col span={20}>
      <div className="square-container">
        <div className="square">
          <div className="content">
            <img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg"></img>
          </div>
        </div>

        <div className="square">
          <div className="content spread">
            <img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg"></img>
          </div>
        </div>

        <div className="square">
          <div className="content column">
            <img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg"></img>
          </div>
        </div>
        <div className="square-content">
          <div className="content">
            <h3>{cleaningHeader}</h3>
            <div className="divider" />
            {/* <Divider style={{border: "solid", minWidth: "30%", width:"30%"}}/> */}
            <p>{cleaningContent}</p>
          </div>
        </div>

        <div className="square-content">
          <div className="content">
            <h3>{repairHeader}</h3>
            <div className="divider" />
            <p>{repairContent}</p>
          </div>
        </div>

        <div className="square-content">
          <div className="content">
            <h3>{saleHeader}</h3>
            <div className="divider" />
            <p>{saleContent}</p>
          </div>
        </div>
      </div>

    </Col>
    <Col span={2}></Col>
    </Row>
    <style jsx>{`
      .ant-card-cover {
        height: 25em;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-self: center;
      }
      .ant-card-body {
        padding: 0;
        widht: 100%;
        margin: 0;
      }
      .ant-card-cover img {
        height: 100%;
        width: auto;
      }
      .square-container {
        display: flex;
        justify-content: space-between;
        -webkit-flex-wrap: wrap;
        margin-bottom: 5rem;
      }

      .square {
        position: relative;
        flex-basis: calc(31.5% - 10px);
        margin-top: 25px;
        margin-bottom: 20px;
        margin-left: 0;
        marginright: 0;
        overflow: hidden;
        box-sizing: border-box;
      }

      .square::before {
        content: "";
        display: block;
        padding-top: 100%;
      }

      .square .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .square .content img {
        height: 120%;
        position: absolute;
        right: 0px;
      }
      .square-content {
        position: relative;
        width: calc(31.5% - 10px);
        height: 12rem;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0;
        marginright: 0;
        overflow: hidden;
        box-sizing: border-box;
      }
      .square-content::before {
        content: "";
        display: block;
        padding-top: 100%;
      }
      .square-content .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .divider {
        display: block;
        clear: both;
        width: 30%;
        min-width: 30%;
        height: 1px;
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 25px;
        border: solid 1.5px;
      }
      .header-section {
        display: flex;
        justify-content: end;
        font-size: 2.2rem;
        color: #363636;
        margin-bottom: 2rem;
        
      }
    `}</style>
  </div>
);

export default ServicesSection;
