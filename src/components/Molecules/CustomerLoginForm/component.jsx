import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Loading from "components/Utils/Loading";

const CustomerLoginForm = props => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    setLoading(true);
    props.onSubmit(email, password, () => {
      setLoading(false);
      if (props.onSubmitCallback) {
        props.onSubmitCallback();
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </Form.Group>

      <ButtonToolbar>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Login
        </Button>
      </ButtonToolbar>
    </Form>
  );
};

export default CustomerLoginForm;
