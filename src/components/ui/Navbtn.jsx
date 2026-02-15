import React from 'react'
import BtnBook from './BtnBook'

export default function Navbtn() {
    return (
        <>
            <div className='flex gap-3.5'>
                <BtnBook className="w-fit" isMainBtn={true}>
                    Business
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    Self Help
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    History
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    Romance
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    Fantasy
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    Art
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    Kids
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    Music
                </BtnBook>
                <BtnBook className="w-fit" isMainBtn={false}>
                    Cooking
                </BtnBook>
            </div>
        </>
    )
}
