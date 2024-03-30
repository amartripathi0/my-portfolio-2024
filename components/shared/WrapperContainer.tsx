import React from 'react'

    const WrapperContainer = ( {children , additionalStyle}  : {children : React.ReactNode , additionalStyle ?: string}) => {

        return (
        <div className={`${additionalStyle}  border-prelude-600 border-2 rounded-full hover:shadow-md hover:shadow-violet-500 hover:border-rum-500 border-1 h-5/6  text-lg  transition-all duration-200` }>
            {children}
        </div>
    )
    }

    export default WrapperContainer
