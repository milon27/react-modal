# React Wrapper for tailwind modal

Compitable with react js and next js.

## Installation Commands

```bash
npm install react-tailwind-modal
```

### How to use

1. import css in index.js/ts or app.jsx or app.tsx. (if tailwind project import it after main tailwind css)

```ts
import 'react-tailwind-modal/dist/style.css';
```
2. use the simple modal

```tsx
import { Modal,Button } from 'react-tailwind-modal';

const App=()=>{
  const [show, setShow] = useState(false)

  return <div>
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
  </div>
}

```

> screenshot

![screenshot](screenshot.png)
