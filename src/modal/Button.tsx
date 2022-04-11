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
                className='px-5 py-2.5 rounded-md text-sm text-gray-700 border hover:bg-gray-50'
                onClick={onClick}
            >{title}</button>
        )
    }
    return (
        <button
            className='px-5 py-2.5 rounded-md text-sm text-white bg-gray-700 hover:bg-gray-800'
            onClick={onClick}
        >{title}</button>
    )
}
