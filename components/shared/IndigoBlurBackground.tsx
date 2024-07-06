function IndigoBlurBackground({
  top,
  left,
  height,
  mobHeight,
  right,
  minusTop,
  additionalStyles,
}: {
  top?: string
  left?: string
  height?: string
  mobHeight?: string
  right?: string
  minusTop?: string
  additionalStyles?: string
}) {
  return (
    <div
      className={`${additionalStyles} absolute opacity-80 left-${left} h-${height} max-sm:h-[${mobHeight}] top-${top} -top-${minusTop} right-${right} aspect-square blur-[100px]  rounded-full
    bg-gradient-to-r from-indigo-600  to-cyan-400  
    `}
    />
  )
}

export default IndigoBlurBackground
