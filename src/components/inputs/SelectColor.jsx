import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {pickColor} from "../../features/gradient"

export default function SelectColor() {
    const dispatch = useDispatch()
    const gradientValues = useSelector(state => state.gradient)

  return (
    <div className='mb-5'>
        <select 
        onChange={e => {
            // console.log(e)
            dispatch(pickColor(Number(e.target.value)))
        }}
        className='bg-orange-200 text-orange-800 cursor-pointer py-1 px-2 mb-1 mt-2 border border-orange-700 outline-none focus:border-amber-300'>
            {gradientValues.colors.map((color, index) => (
                <option 
                key={color.id}
                value={color.id}>
                    Color {color.id}
                </option>
            ))}
        </select>
    </div>
  )
}
