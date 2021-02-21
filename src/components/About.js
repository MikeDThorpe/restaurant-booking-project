import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Avatar from 'react-avatar';
import {FaFacebook}  from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa'


 class About extends React.Component {
    render() {
        return (
            <Container>
                <div className="About">
  <Row>
    <Col md="8">
        <h1>About Us</h1>
        <br></br>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br></br>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
        veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
        dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
    </Col>
    <Col md="4">
    <img className="avatar"
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                alt="Avatar"
              />
    </Col>
  </Row>
  <Card className="my-5 px-5 pb-5 text-center">
        <Card.Body>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <Row>
            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              <Avatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
              <p className="text-uppercase blue-text">Supervisor</p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <FaFacebook className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaInstagram className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaTwitter className="blue-text" />
                </a>
              </ul>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              <Avatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
              <p className="text-uppercase blue-text">Head Chef</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <FaFacebook className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaInstagram className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaTwitter className="blue-text" />
                </a>
              </ul>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              <Avatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">Manager</p>
              <p className="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <FaFacebook className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaInstagram className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaTwitter className="blue-text" />
                </a>
              </ul>
            </Col>
            <Col lg="3" md="6" className="mb-lg-0 mb-5">
              <Avatar
                tag="img"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Receptionist</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
                nisi qui consectetur totam officia voluptates perferendis
                voluptatibus aut.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <FaFacebook className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaInstagram className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <FaTwitter className="blue-text" />
                </a>
              </ul>
            </Col>
            </Row>
          </Card.Body>
          </Card>
  </div>
</Container>
        )
    }
}

export default About
