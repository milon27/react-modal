import React from 'react'

interface iCanvas {
    title: string,
    children: React.ReactNode
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    position?: "left" | "right"
    onClose?: () => void
}

export default function OffCanvas({ show, title, setShow, onClose = () => { }, position = "left", children }: iCanvas) {

    const common = "fixed bottom-0 flex flex-col max-w-full bg-white  bg-clip-padding  outline-none transition duration-500 ease-in-out text-gray-700 top-0 border-none w-64 md:w-80 shadow-xl z-[1200]"

    const left_show_class = `${common} translate-x-0  left-0 `
    const left_hide_class = `${common} -translate-x-full left-0 `

    const right_show_class = `${common} translate-x-0  right-0 `
    const right_hide_class = `${common} translate-x-full right-0 `

    const show_class = position === "left" ? left_show_class : right_show_class;
    const hide_class = position === "left" ? left_hide_class : right_hide_class;

    const hide = () => {
        setShow(false)
        onClose()
    }

    return (
        <>
            <div className={show === true ? show_class : hide_class} >
                <div className=" offcanvas-header flex items-center justify-between p-4">
                    <h5 className="offcanvas-title mb-0 leading-normal font-semibold uppercase" >{title}</h5>
                    <button onClick={() => setShow(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <hr />
                <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
                    {children}
                </div>
            </div>

            <div className={show === true ? "w-screen h-screen bg-black bg-opacity-30 absolute top-0 left-0" : ""} onClick={hide}></div>
        </>

    )
}
