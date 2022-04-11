import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Modal, Button } from '../src';

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
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
    </Modal>
  </>
}
