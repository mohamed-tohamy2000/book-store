import React from 'react'
import Historycomponent from './Historycomponent'

export default function InProgress() {
    return (
        <>
            <div className='p-9 mt-7'>
                <Historycomponent or={true} />
                <Historycomponent or={true} className="mt-4" />
                
            </div>
        </>
    )
}
