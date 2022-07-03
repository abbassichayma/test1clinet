import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) =>{
    e.preventDefault()
    setShow(true);
  } 

  return (
    <>
      <Button variant="primary" onClick={(e)=>handleShow(e)}>
        Publier votre article
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>si vous etes intéressé(e)s de publier un articles sur notre site web<br></br> créer vote compte</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} href="/Login">
            s'inscrire
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Example 