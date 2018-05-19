import React, {Component} from 'react';
import KontenKartu from './KontenKartu.json';
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Col,
  Row
} from 'reactstrap';

class KartuJson extends Component{
  render(){
    return(
      <div>
        <Row>
          {
            KontenKartu.map(function(Kartu){
              return
              (<Col sm="4">
                <Card body>
                  <CardTitle>{Kartu.title}</CardTitle>
                  <CardText>With supporting text below as a natural
                    lead-in to additional content.
                  </CardText>
                  <Button>{Kartu.jalur}</Button>
               </Card>
              </Col>);
            })
          }
        </Row>
      </div>
    );
  }
}
const kartuGuys=(
   <div>
     <Row>
      <Col sm="4">
       <Card body>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural
        lead-in to additional content.</CardText>
        <Button>Go somewhere</Button>
        </Card>
       </Col>
       <Col sm="4">
       <Card body>
         <CardTitle>Special Title Treatment</CardTitle>
         <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         <Button>Go somewhere</Button>
       </Card>
       </Col>
       <Col sm="4">
       <Card body>
         <CardTitle>Special Title Treatment</CardTitle>
         <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         <Button>Go somewhere</Button>
       </Card>
       </Col>
     </Row>
   </div>
 );


 const RotiMadu=(
   <Breadcrumb>
     <BreadcrumbItem active>Utama</BreadcrumbItem>
   </Breadcrumb>
 );



 export default [RotiMadu, kartuGuys];
