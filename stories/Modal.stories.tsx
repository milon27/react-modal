import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Modal, Button, OffCanvas } from '../src';

const meta: Meta = {
  title: 'Components'
};

export default meta;

export const SimpleModal = () => {
  const [show, setShow] = useState(false)
  return <>

    <Button title='Open Modal' onClick={() => setShow(true)} type="fill" />

    <Modal
      title='Simple Modal'
      show={show}
      setShow={setShow}
      footer={<>
        <Button title='Cancel' onClick={() => setShow(false)} />
        <Button title='Done' onClick={() => setShow(false)} type="fill" />
      </>}
      onClose={() => {
        console.log("closing the modal");
      }}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
    </Modal>
  </>
}


export const OffCanvasModal = () => {
  const [show, setShow] = useState(false)

  return <>
    <Button title='Open Left Off Canvas' onClick={() => setShow(true)} type="fill" />
    <Button title='Open Right Off Canvas' onClick={() => setShow(true)} type="fill" />

    <OffCanvas
      title='Left Modal'
      show={show}
      setShow={setShow}
      onClose={() => { console.log("closing the offcanvas") }}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
    </OffCanvas>

    <OffCanvas
      title='Right Modal'
      position='right'
      show={show}
      setShow={setShow}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
    </OffCanvas>
  </>
}
