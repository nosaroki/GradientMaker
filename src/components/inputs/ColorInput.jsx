import React from 'react'
import { useDispatch } from 'react-redux'
import { updateColorValue } from '../../features/gradient'

export default function ColorInput({id, color}) {
    const dispatch = useDispatch()

  return (
  <input 
    onChange={e => dispatch(updateColorValue({id, value: e.target.value, type: "color"}))} 
    value={color} 
    type="color" 
    className='w-[60px] h-[60px] bg-transparent rounded-md cursor-pointer d-block [&:not(:lastchild)]:mr-4' />  ) // ajouter une marge arbitraire (mr-4) sauf sur le dernier élément
}


