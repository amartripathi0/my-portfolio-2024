    import React from 'react'

    const WrapperContainer = ( {children , additionalStyle}  : {children : React.ReactNode , additionalStyle ?: string}) => {
    return (
        <div className={`${additionalStyle} border-primary border-2 rounded-xl hover:shadow-md hover:shadow-purple-400 hover:border-cyan-500 border-1 h-5/6  text-lg  transition-all duration-200  ` }>
            {children}
        </div>
    )
    }

    export default WrapperContainer