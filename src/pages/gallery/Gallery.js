import React from 'react'
import "./gallery.scss"
import Pagetop from '../../comp/pagetop/Pagetop'
const Gallery = () => {
  return (
    <>
      <Pagetop  pageHeader="Maulees's Work" />

      <div className="gallery-parent parent">
        <div className="gallery-cont cont">
            <div className="btn-list">
                <div className="btn-tag">
                    Photos
                </div>
                <div className="btn-tag">
                    Videos
                </div>
                <div className="btn-tag">
                    YT Links
                </div>
            </div>

            <div className="gallery-section">
              <div className="div1  class"></div>
              <div className="div2  class"></div>
              <div className="div3  class"></div>
              <div className="div4  class"></div>
              <div className="div5  class"></div>
              <div className="div6  class"></div>
              <div className="div7  class"></div>
              <div className="div8  class"></div>
              <div className="div9  class"></div>
              <div className="div10  class"></div>
              <div className="div11  class"></div>
              <div className="div12  class"></div>
              <div className="div13  class"></div>
              <div className="div14  class"></div>
               
            </div>
        </div>
      </div>
    </>
  )
}

export default Gallery
