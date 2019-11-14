import { Card, Col, Row, Divider, Typography } from 'antd';
const { Title } = Typography;

const ServicesSection = ({cleaningHeader, repairHeader, saleHeader, cleaningContent, repairContent, saleContent}) => (
    <Row type="flex" justify="space-between" align="start"
    style={{width:"100%"}}>
        <Col span={2}></Col>
        <Col span={5} style={{overflow:"hidden"}}>
        <Card cover={<img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg" alt="" />} bordered={false}
        style={{backgroundColor:"transparent", borderRadius:"30px"}}>
        <Title level={4}>{cleaningHeader}</Title>
        <Divider />
        {cleaningContent}
        </Card>
        </Col>
        <Col span={5} style={{overflow:"hidden"}}>
         <Card cover={<img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg" alt="" />} bordered={false}
        style={{backgroundColor:"transparent"}}>
        <Title level={4}>{repairHeader}</Title>
        <Divider />
        {repairContent}
        </Card>
        </Col>
        <Col span={5} style={{overflow:"hidden"}}>
        <Card cover={<img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg" alt="" />} bordered={false}
        style={{backgroundColor:"transparent"}}>
        <Title level={4}>{saleHeader}</Title>
        <Divider />
        {saleContent}
        </Card>
        </Col>
        <Col span={2}></Col>
        <style jsx>{`
        .ant-card-cover {
            widht:10vw;
            height:10vw;
        }
        .ant-card-body {
            padding:0;
            widht:100%
            margin:0;
        }
        .ant-divider {
            min-width:50%;
            border: solid #7E764F;
        }
        .ant-divider-horizontal {
            widht:50%;
            min-width:50%;
            // margin-top:0;
            // margin-bottom:10px;
        }
     
      `}</style>
    </Row>

    //   <div style={{ padding: '30px' }}>
//     <Row type="flex" justify="space-between">
//       <Col span={6}>
//         <Card cover={<img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg" alt="" />} bordered={false}
//         style={{backgroundColor:"transparent", borderRadius:"30px"}}>
//         <Title level={4}>{cleaningHeader}</Title>
//         <Divider />
//         {cleaningContent}
//         </Card>
//       </Col>
//       <Col span={6}>
//         <Card cover={<img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg" alt="" />} bordered={false}
//         style={{backgroundColor:"transparent"}}>
//         <Title level={4}>{repairHeader}</Title>
//         <Divider />
//         {repairContent}
//         </Card>
//       </Col>
//       <Col span={6}>
//         <Card cover={<img src="https://travari.s3-us-west-2.amazonaws.com/images/rug-cleaning.jpg" alt="" />} bordered={false}
//         style={{backgroundColor:"transparent"}}>
//         <Title level={4}>{saleHeader}</Title>
//         <Divider />
//         {saleContent}
//         </Card>
//       </Col>
//     </Row>
//     <style jsx>{`
//         .ant-card{
//             border-radius:10px;
//         }
//       `}</style>
    
//   </div>
);

export default ServicesSection;