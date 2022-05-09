import React from 'react'

interface iModal {
    title: string
    hideTitle?: boolean
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactNode
    footer: React.ReactNode
    onClose?: () => void
}
export default function Modal({ hideTitle = false, show = false, setShow, onClose = () => { }, title, children, footer }: iModal) {
    return (
        <div aria-hidden="true" className={show === true ? " rm-bg-slate-900 rm-flex rm-bg-opacity-60 rm-overflow-y-auto rm-overflow-x-hidden rm-fixed rm-right-0 rm-left-0 rm-top-0 rm-bottom-0 rm-z-50 rm-justify-center rm-items-center md:rm-h-full md:rm-inset-0" : "rm-hidden"}>
            <div className="rm-relative rm-px-4 rm-w-max rm-min-w-[350px] md:rm-min-w-[450px] rm-max-w-6xl rm-max-h-[85vh] md:rm-h-auto">
                {/* Modal content */}
                <div className="rm-relative rm-bg-white rm-rounded-lg rm-shadow ">

                    {hideTitle === true ? <></> :
                        <>
                            <div className="rm-flex rm-justify-between rm-items-start rm-p-5 rm-rounded-t rm-border-b ">
                                <h3 className="rm-text-xl rm-font-semibold rm-text-gray-900 lg:rm-text-2xl ">
                                    {title}
                                </h3>

                                <button onClick={() => {
                                    setShow(false)
                                    onClose()
                                }} type="button" className="rm-text-gray-400 rm-bg-transparent hover:rm-bg-gray-200 hover:rm-text-gray-900 rm-rounded-lg rm-text-sm rm-p-1.5 rm-ml-auto rm-inline-flex rm-items-center " data-modal-toggle="defaultModal">
                                    <svg className="rm-w-5 rm-h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                            </div>
                        </>}

                    {/* end Modal header */}

                    {/* Modal body */}
                    <div className="rm-p-6 rm-space-y-6">
                        {
                            children
                        }
                    </div>
                    {/* Modal footer */}
                    <div className="rm-flex rm-justify-end rm-items-center rm-px-6 rm-pb-6 rm-space-x-2 rm-rounded-b ">
                        {footer}
                    </div>
                </div>
            </div>
        </div>

    )
}
