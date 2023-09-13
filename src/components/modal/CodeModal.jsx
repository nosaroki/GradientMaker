import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getGradientCSSValue from '../../utils/getGradientCSSValue'

export default function CodeModal({closeModal}) {
    const gradientValues = useSelector(state => state.gradient)

    let runningAnimation = false
    function handleCopy(e) {
        if(!runningAnimation) {
            runningAnimation = true
            e.target.textContent = "Copied !"
        }

        navigator.clipboard.writeText(`background-image : ${getGradientCSSValue(gradientValues)}`)
        setTimeout(()  => {
            e.target.textContent = "Copy"
            runningAnimation = false
        }, 500)
    }

    useEffect(() => {
        document.body.style.overflowY = "hidden"

        return () => document.body.style.overflowY = "visible"
    }, []) 
    

  return (
    <div
    onClick={closeModal} 
    className='fixed z-10 top-0 left-0 w-full h-full bg-orange-800/95 flex justify-center items-center'>
        <div onClick={e => e.stopPropagation()} className='mb-[10vh] max-w-[500px] rounded p-7 bg-orange-50'>
            <div className='flex items-center mb-5'>
                <p className='font-semibold text-orange-900 mr-6'>✨ Here is your code ✨</p>
                <button onClick={handleCopy} className='ml-auto mr-2 text-sm bg-orange-600 text-white hover:bg-orange-700 py-1 px-3 rounded'>Copy</button>
                <button onClick={closeModal} className='text-sm bg-red-700 text-white hover:bg-orange-900 py-1 px-3 rounded'>Close</button>
            </div>
            <p className='rounded bg-orange-300 p-5 text-orange-800 font-semibold'>
                   {`background-image : ${getGradientCSSValue(gradientValues)}`}
                </p>
        </div>
    </div>
  )
}
