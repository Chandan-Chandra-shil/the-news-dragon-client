import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../Qzone/Qzone';
import bg from "../../assets/bg.png"

const RightNav = () => {
  return (
    <div>
      <h3 className="mb-4">Login With</h3>
      <Button
        className="mb-2 d-flex gap-2 align-items-center"
        variant="outline-primary"
        size="lg"
      >
        <FaGoogle />
        <span>Login With Google</span>
      </Button>
      <Button
        className="d-flex gap-2 align-items-center mb-4"
        variant="outline-secondary "
        size="lg"
      >
        <FaGithub />
        <span> Login With Github</span>
      </Button>
      <div>
        <h3 className="mb-4">Find Us</h3>
        <ListGroup className="mb-5">
          <ListGroup.Item>
            <a href="https://www.facebook.com/" target="blank">
              <FaFacebook></FaFacebook>
              Facebook
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://twitter.com/" target="blank">
              <FaTwitter></FaTwitter> Twitter
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://www.instagram.com/" target="blank">
              <FaInstagram></FaInstagram> Instagram
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className='ms-3'>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;