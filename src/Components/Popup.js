import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const Popup = (props) => {

  const { title, body, footer, show, onCancel, onConfirm } = props

  return (
    <Modal show={show} onHide={onCancel} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        {title}
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>
    </Modal>
  )
}

export default Popup