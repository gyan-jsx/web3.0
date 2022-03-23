import React from 'react'
import github from '../../images/github.png'
import javascript from '../../images/javascript.png';
import python from '../../images/python.png'
import react from '../../images/react.png'
import ruby from '../../images/ruby.png'
const Tech = () => {
  return (
    <div className='slack-style'>
        <div className="tech-box-wrapper">
            <div className="tech-container-style">
                <div className="tech-row-style">
                    <div style={{marginLeft: '30%'}} className="tech-col-style">
                        <div  className="text-center">
                            <h1 className="tech-heading">
                            Technology we use
                            </h1>
                            <p  className="small-text">
                            Attention in when in just something bread not hundred well, muff value <br /> emerge on the known officers.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft: '25%'}} className="tech-row-style">
                    <div className="tech-col-style-o">
                        <div className="tech-box-wrapper-o">
                            <a href=""><img src={github} alt="" className='imk'/></a>
                            <a  href=""><img src={javascript} alt="" className='ml-20 imk' /></a>
                            <a href=""><img src={python} alt="" className='ml-20 imk' /></a>
                            <a href=""><img src={react} alt="" className='ml-20 imk' /></a>
                            <a href=""><img src={ruby} alt="" className='ml-20 imk'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tech