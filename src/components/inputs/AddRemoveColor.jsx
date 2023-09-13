import React from 'react'
import { useDispatch } from 'react-redux'
import { addColor, removeColor } from '../../features/gradient'

export default function AddRemoveColor({action, text}) {
    const dispatch = useDispatch()

    function handleClick() {
        if (action === "add") {
            dispatch(addColor())
        }
        else if(action === "remove") {
            dispatch(removeColor())
        }
    }
  return (
    <button onClick={handleClick} className='mr-1 border border-orange-700 rounded w-[40px]'>
        {text}
    </button>
  )
}
