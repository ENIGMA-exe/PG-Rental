import Link from 'next/link';
import React from 'react'

import {motion} from 'framer-motion'


export default function Features() {

    // const data = [
    //     {
    //         title:'Clean bathroom',
    //         img:'/images/service/service4.2.png'
    //     },
    //     {
    //         title:'Neat environment',
    //         img:'/images/service/service4.2.png'
    //     },
    //     {
    //         title:'Cozy beds',
    //         img:'/images/service/service4.2.png'
    //     },
    //     {
    //         title:'Spacious cupboard',
    //         img:'/images/service/service4.2.png'
    //     },
    //     {
    //         title:'Desks',
    //         img:'/images/service/service4.2.png'
    //     },
    //     {
    //         title:'Entertainment area',
    //         img:'/images/service/service4.2.png'
    //     },
    //     {
    //         title:'Clean restrooms',
    //         img:'/images/service/service4.2.png'
    //     },
    //     {
    //         title:'Clean restrooms',
    //         img:'/images/service/service4.2.png'
    //     }
    // ] 

    const data = [
        {
            title:'Clean bathroom',
            img:'/images/features/ft1.png'
        },
        {
            title:'Neat environment',
            img:'/images/features/ft2.png'
        },
        {
            title:'Cozy beds',
            img:'/images/features/ft3.png'
        },
        {
            title:'Spacious cupboard',
            img:'/images/features/ft4.png'
        },
        {
            title:'Desks',
            img:'/images/features/ft5.png'
        },
        {
            title:'Entertainment area',
            img:'/images/features/ft6.png'
        },
        {
            title:'Clean restrooms',
            img:'/images/features/ft1.png'
        },
        {
            title:'Clean restrooms',
            img:'/images/features/ft2.png'
        }
    ]

  return (
    <div className='tp-service-area pb-90 grey-bg'>
        {/* class name:- featuers */}
        <motion.div className=' container'>
            <div className='row'>

                {
                    data.map((detail,index)=>{
                        return(
                            <motion.div 
                                className='col-lg-3 col-md-6 col-sm-6 row-item'
                                key={index}
                                
                                initial={{opacity:0,y:'10vh'}}
                                whileInView={{y:0,opacity:1}}
                                viewport={{once:false,amount:0.9}}
                                transition={{staggerChildren:0.9,duration:0.9}}
                            >

                                <div className='single-products-box'>
                                <div className='products-image'>
                                    <Link href='/product-details'>
                                    <a>
                                        <img src={detail.img} className='main-image' alt='image'/>
                                    </a>
                                    </Link>
                                </div>

                                <div className='products-content'>
                                    <h3>{detail.title}</h3>
                                </div>

                                </div>
                            </motion.div>
                        )
                    })
                }

                {/* {
                    data.map((details,index)=>{
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s" key={index}>
                                <div className="tp-sv-border-effect">
                                    <div className="tp-service-item-four sv-color-1 mb-30">
                                        <div className="tp-service-item-four__img  mb-40">
                                            <img src={details.img} alt=""/>
                                        </div>
                                        <div className="tp-service-item-four__title">
                                            <h3 className="tp-sv-sm-title">
                                                <a href="service-details.html">{details.title}</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                } */}
                
            </div>
        </motion.div>
    </div>
  )
}
