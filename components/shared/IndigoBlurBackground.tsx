function IndigoBlurBackground({top , left , height ,right , minusTop } : {top ?: string , left ?: string , height ?: string , right ?: string , minusTop ?: string}) {
  return (
    < div
    className={`absolute opacity-80 left-${left} h-${height} top-${top} -top-${minusTop} right-${right} aspect-square blur-[100px]  rounded-full
    bg-gradient-to-r from-indigo-600  to-cyan-400  
    `}
    />  )
}

export default IndigoBlurBackground
