import React from 'react'
import "./slidetext.scss"
const SlideText = ({
  fontsize,
  firstTextTOP,
  secondTextTOP,
  firstdelay,
  seconddelay,thirddelay
}) => {
  return (
    <>
      <div className="swipe-text parent" style={{fontSize:fontsize, }} >
        <h1  style={{top:firstTextTOP, animationDelay:firstdelay}} >
            MOULEES'S TATTOO
        </h1>
        {/* <h1 className='scondetxt' style={{top:secondTextTOP, animationDelay:seconddelay}}  >
            MOULEES'S TATTOO
        </h1>
        <h1 className='thirdtext' style={{top:secondTextTOP, animationDelay:thirddelay}}  >
            MOULEES'S TATTOO
        </h1> */}
       
      </div>
    </>
  )
}

export default SlideText
