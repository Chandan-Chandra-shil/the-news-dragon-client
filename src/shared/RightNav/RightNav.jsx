import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../Qzone/Qzone';
import bg from "../../assets/bg.png"

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button
        className="mb-2 d-flex gap-2 align-items-center"
        variant="outline-primary"
      >
        <FaGoogle />
        <span>Login With Google</span>
      </Button>
      <Button
        className="d-flex gap-2 align-items-center"
        variant="outline-secondary "
      >
        <FaGithub />
        <span> Login With Github</span>
      </Button>
      <div> 
        <h4>Find Us</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook ></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
         
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
      
    </div>
  );
};

export default RightNav;