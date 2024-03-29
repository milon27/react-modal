import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { Modal, OffCanvas } from '../src';

const meta: Meta = {
  title: 'Components'
};

export default meta;

export const SimpleModal = () => {
  const [show, setShow] = useState(false)
  const [showContent, setShowContent] = useState(false)
  return <>

    <Button title='Open Modal' onClick={() => setShow(true)} type="fill" />

    <Modal
      title='Simple Modal'
      show={show}
      footer={<>
        <Button title='Cancel' onClick={() => setShow(false)} />
        <Button title='Done' onClick={() => setShow(false)} type="fill" />
      </>}
      onClose={() => {
        setShow(false)
        console.log("closing the modal");
      }}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
    </Modal>


    <Button title='Open only Content Modal' onClick={() => setShowContent(true)} type="fill" />

    <Modal
      show={showContent}
      className="rm-bg-green-600"
      bgStyleClassName="rm-bg-black-600 rm-bg-opacity-10"
      contentStyleClassName=''
      onClose={() => {
        setShowContent(false)
        console.log("closing the modal");
      }}
    >
      <p>Lorem ipsum dolor </p>
    </Modal>
  </>
}


export const OffCanvasModal = () => {
  const [show, setShow] = useState(false)
  const [showBtm, setShowBtm] = useState(false)

  return <>
    <Button title='Open Left Off Canvas' onClick={() => setShow(true)} type="fill" />
    <br />
    <br />
    <Button title='Open Right Off Canvas' onClick={() => setShow(true)} type="fill" />
    <br />
    <br />
    <Button title='Open Bottom Canvas' onClick={() => setShowBtm(true)} type="fill" />

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
      dismissable
      setShow={setShow}
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
    </OffCanvas>

    <OffCanvas
      title='Bottom Modal'
      hideHeader
      position='bottom'
      show={showBtm}
      setShow={setShowBtm}
      dismissable
      className='rm-rounded-t-3xl !rm-top-[20%]'
    >
      <p>MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM11111111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?2222222222222222</p>
    </OffCanvas>
    {
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12, 13].map(item => {
        return <div>
          <p>11111111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?2222222222222222</p>

        </div>
      })
    }
  </>
}


interface iButton {
  title: string,
  onClick: () => void
  type?: "fill" | "outline"
}
function Button({ title, onClick, type = "outline" }: iButton) {
  if (type === "outline") {
    return (
      <button
        className='rm-px-5 rm-py-2.5 rm-rounded-md rm-text-sm rm-text-gray-700 rm-border hover:rm-bg-gray-50'
        onClick={onClick}
      >{title}</button>
    )
  }
  return (
    <button
      className='rm-px-5 rm-py-2.5 rm-rounded-md rm-text-sm rm-text-white rm-bg-gray-700 hover:rm-bg-gray-800'
      onClick={onClick}
    >{title}</button>
  )
}