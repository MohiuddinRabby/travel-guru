import React from "react";
import { Button, Modal } from "react-bootstrap";
import googleIcon from "../../assets/img/google.svg";
import facebookIcon from "../../assets/img/facebook.svg";
import Auth from "../../assets/hooks/useAuth";
import "./Login.css";
const Login = (props) => {
  const auth = Auth();
  // console.log(auth);
  const handleSingIn = () => {
    auth.singInWithGoole().then((res) => {
      //to go the url where it came from with :slug
      // history.goBack();
      props.handleClose();
    });
  };
  const handleSingInFacebook = () => {
    auth.singInWithFacebook().then((res) => {
      //to go the url where it came from with :slug
      // history.goBack();
      props.handleClose();
    });
  };
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      className="text-primary text-center"
    >
      <Modal.Header>
        <Modal.Title style={{ color: " #3b5998" }}>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <button onClick={handleSingIn} className="google btns">
          <img
            src={googleIcon}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          Login with Google
        </button>
        <button className="fb btns" onClick={handleSingInFacebook}>
          <img
            src={facebookIcon}
            alt=""
            style={{ width: "25px", height: "25px" }}
          />
          Login with Facebook
        </button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
