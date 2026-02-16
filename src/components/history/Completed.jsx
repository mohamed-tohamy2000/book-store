import React from 'react'
import Historycomponent from './Historycomponent'

export default function Completed() {
    return (
        <>
            <div className='p-9 mt-7'>
                <Historycomponent or={false} />
                <Historycomponent or={false} className="mt-4" />
                <Historycomponent or={false} className="mt-4 " />
            </div>
        </>
    )
}
