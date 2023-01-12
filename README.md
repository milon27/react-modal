# React Wrapper for tailwind modal

Compitable with react js and next js.

## Installation Commands

```bash
npm install @milon27/react-modal
```

### How to use

1. import css in index.js/ts or app.jsx or app.tsx. (if tailwind project import it after main tailwind css)

```ts
import '@milon27/react-modal/dist/style.css';
```
2. use the simple modal

```tsx
import { Modal,Button } from '@milon27/react-modal';

const App=()=>{
  const [show, setShow] = useState(false)
  const [showContent, setShowContent] = useState(false)

  return <div>
    <Button title='Open Modal' onClick={() => setShow(true)} type="fill" />

    <Modal
      title='Simple Modal'
      show={show}
      footer={<>
        <Button title='Cancel' onClick={() => setShow(false)} />
        <Button title='Done' onClick={() => setShow(false)} type="fill" />
      </>}
      onClose={() => { setShow(false);console.log("closing the modal") }} //optional
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis laborum maxime blanditiis rem iusto. Nostrum est eligendi aliquid nulla eaque, reprehenderit aliquam ratione cumque, excepturi magnam libero labore vero?</p>
    </Modal>
  </div>
}

```

> screenshot 1

![screenshot](screenshot.png)

3. use offcanvas

```tsx
import { OffCanvas , Button } from '@milon27/react-modal';

const App=()=>{
  const [show, setShow] = useState(false)

  return <div>
    <Button title='Open Left Off Canvas' onClick={() => setShow(true)} type="fill" />
    <Button title='Open Right Off Canvas' onClick={() => setShow(true)} type="fill" />

    <OffCanvas
      title='Left Modal'
      show={show}
      setShow={setShow}
      dismissable
      onClose={() => { console.log("closing the OffCanvas") }} //optional
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
  </div>
}

```

> screenshot 2

![screenshot](screenshot-canvas.png)
