import React from 'react'
import getGradientCSSValue from '../utils/getGradientCSSValue'
import { useSelector } from 'react-redux'

export default function Gradient() {
  const gradientValues = useSelector(state => state.gradient)

  return (
    <div 
    style={{backgroundImage: getGradientCSSValue(gradientValues).slice(0,-1)}} // 0,-1 prend toute la chaine de caracteres en partant de 0 et en omettant le dernier caractère ici ;
    className='w-1/2 border-2 border-orange-900'></div>
  )
}
