import React from 'react'
import Herosection from '../components/HeroSection/Herosection'
import BtnBook from '../components/ui/BtnBook'
import Historyall from '../components/history/Historyall'

export default function History() {
    return (
        <>
            <Herosection h={"h-[120px]"} />
            <div className='flex items-center justify-center'>
                <div className=' container flex justify-center flex-col '>
                    <nav className='flex gap-6 mt-8'>
                        <BtnBook className="w-fit" isMainBtn={true}>
                            All
                        </BtnBook>
                        <BtnBook className="w-fit" isMainBtn={false}>
                            In Progress
                        </BtnBook>
                        <BtnBook className="w-fit" isMainBtn={false}>
                            Completed
                        </BtnBook>
                        <BtnBook className="w-fit" isMainBtn={false}>
                            Canceled
                        </BtnBook>
                    </nav>
                    <div>
                    <Historyall/>
                    </div>
                </div>
            </div>
        </>
    )
}
