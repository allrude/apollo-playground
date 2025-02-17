import React from "react";
import Alert from "react-bootstrap/Alert";

const Item = props => {
  if (props.autoClose) {
    setTimeout(() => {
      props.onClose();
    }, 4000);
  }

  let message = props.text;
  message = message.replace('Error: GraphQL error: ', '');

  return (
    <Alert
      variant={props.type}
      closeLabel="Remove message"
      dismissible
      onClose={props.onClose}
    >
      {message}
    </Alert>
  );
};

export default Item;
