import React from 'react'
import { useState } from 'react'
import CodeModal from "../modal/CodeModal"
import { createPortal } from 'react-dom'

export default function OpenModalBtn() {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
    <button 
    onClick={() => setShowModal(!showModal)}
    className='bg-orange-600 text-orange-100 py-2 px-6 rounded-md min-w-[125px] font-semibold'>
        Get the code !
    </button>
    {showModal && createPortal(<CodeModal closeModal={()  => setShowModal(!showModal)} />, document.body)}
    </>
  )
}
