
import React, { useEffect } from 'react'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'


export default function DesignTabHeading({title,subtitle,span,reff,bool_reff,animate}) {

  
  return (
        <section className="designtab-heading">

          <motion.h1 className='myheading' ref={reff} animate={animate}> 
            <h1>
              {title}

              <svg width="350" height="90" viewBox="0 0 160 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L160 11H0V0Z" fill="#FFDC60" />
              </svg>

              {/* <span>{span}</span>  */}
            </h1>
            <h1 className='span'>
              {span}
            </h1>
            
            
          </motion.h1>

          {/* <p>
              {subtitle}
          </p> */}
        </section>
  )
}
