import React, { useCallback, useRef } from 'react';
// import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button, Modal } from 'react-daisyui';

const Home: React.FC = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return (
    <main>
      <Navbar />
      <div className="font-sans">
      <Button onClick={handleShow}>Open Modal</Button>
      <Modal  ref={ref}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button>Close</Button>
          </form>
        </Modal.Actions>
      </Modal>
    </div>
    </main>
  );
};

export default Home;
