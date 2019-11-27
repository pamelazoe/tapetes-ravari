import { Card, Col, Row, Divider, Typography } from "antd";
const { Title } = Typography;
import "../styles/services.css";

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
    <Row className="service-row" type="flex" justify="center" align="middle">
      <Col span={2} xl={2} xs={1} />
      <Col span={10} xl={10} xs={0} />
      <Col className="services-header" span={10} xl={10} xs={22}>
        <div className="header-section">{sectionHeader}</div>
        <Row type="flex" justify="end">
          <Col
            span={23}
            push={6}
            style={{
              backgroundImage:
                "-webkit-linear-gradient(0deg, #e8e7e1 55%, #7e764f 55%)",
              minHeight: "2px",
              maxHeight: "2px",
              width: "76%"
            }}
          ></Col>
        </Row>
      </Col>
      <Col span={2} xl={2} xs={1}></Col>
    </Row>
    <Row type="flex" justify="space-between" style={{ width: "100%" }}>
      <Col span={2} xl={2} xs={0} />
    {/************* Cards for Web *************/}
      <Col span={20} xl={20} xs={0}className="services-cards-web">
        <div className="square-container">
          <div className="square">
            <div className="content">
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg"></img>
            </div>
          </div>
          

          <div className="square">
            <div className="content">
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/rep.jpg"></img>
            </div>
          </div>

          <div className="square">
            <div className="content">
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/trang-nguyen-drke6MEs8Gg-unsplash.jpg"></img>
            </div>
          </div>
          <div className="square-content">
            <div className="content">
              <h3>{cleaningHeader}</h3>
              <div className="divider" />
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
      {/************* Cards for Mobile *************/}
      <Col xl={0} xs={20} className="services-cards-mobile">
        <div className="square-container">
          <div className="square">
            <div className="content">
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg"></img>
            </div>
          </div>
          <div className="square-content">
            <div className="content">
              <h3>{cleaningHeader}</h3>
              <div className="divider" />
              <p>{cleaningContent}</p>
            </div>
          </div>
          

          <div className="square">
            <div className="content">
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/rep.jpg"></img>
            </div>
          </div>

          <div className="square-content">
            <div className="content">
              <h3>{repairHeader}</h3>
              <div className="divider" />
              <p>{repairContent}</p>
            </div>
          </div>

          <div className="square">
            <div className="content">
              <img src="https://travari.s3-us-west-2.amazonaws.com/images/trang-nguyen-drke6MEs8Gg-unsplash.jpg"></img>
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
      <Col span={2} xl={2} xs={0}></Col>
    </Row>
  </div>
);

export default ServicesSection;
