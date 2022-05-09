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

    const common = "rm-fixed rm-bottom-0 rm-flex rm-flex-col rm-max-w-full rm-bg-white  rm-bg-clip-padding  rm-outline-none rm-transition rm-duration-500 rm-ease-in-out rm-text-gray-700 rm-top-0 rm-border-none rm-w-64 md:rm-w-80 rm-shadow-xl rm-z-[1200]"

    const left_show_class = `${common} rm-translate-x-0  rm-left-0 `
    const left_hide_class = `${common} -rm-translate-x-full rm-left-0 `

    const right_show_class = `${common} rm-translate-x-0  rm-right-0 `
    const right_hide_class = `${common} rm-translate-x-full rm-right-0 `

    const show_class = position === "left" ? left_show_class : right_show_class;
    const hide_class = position === "left" ? left_hide_class : right_hide_class;

    const hide = () => {
        setShow(false)
        onClose()
    }

    return (
        <>
            <div className={show === true ? show_class : hide_class} >
                <div className="rm-flex rm-items-center rm-justify-between rm-p-4">
                    <h5 className="rm-mb-0 rm-leading-normal rm-font-semibold rm-uppercase" >{title}</h5>
                    <button onClick={() => setShow(false)} type="button" className="rm-text-gray-400 rm-bg-transparent hover:rm-bg-gray-200 hover:rm-text-gray-900 rm-rounded-lg rm-text-sm rm-p-1.5 rm-ml-auto rm-inline-flex rm-items-center " data-modal-toggle="defaultModal">
                        <svg className="rm-w-5 rm-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <hr />
                <div className="offcanvas-body rm-flex-grow rm-p-4 rm-overflow-y-auto">
                    {children}
                </div>
            </div>

            <div className={show === true ? "rm-w-screen rm-h-screen rm-bg-black rm-bg-opacity-30 rm-absolute rm-top-0 rm-left-0" : ""} onClick={hide}></div>
        </>

    )
}
