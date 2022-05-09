import React from 'react'
interface iButton {
    title: string,
    onClick: () => void
    type?: "fill" | "outline"
}
export default function Button({ title, onClick, type = "outline" }: iButton) {
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
