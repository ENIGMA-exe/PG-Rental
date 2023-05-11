
import React, { useEffect } from 'react';
import Link from 'next/link';

import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const EventsArea = () => {

    const data = [
        {
            des:"Internet of Things Forum Africa Exhibition 1",
            img:"https://media.istockphoto.com/id/466766434/vector/polygonal-professional-badminton-player.jpg?s=612x612&w=0&k=20&c=0k_PdhAnOePMkj-yQkv4kTldvN4o3xtGJhJZkA7LlQQ="
        },
        {
            des:"Internet of Things Forum Africa Exhibition 2",
            img:"/images/events/events2.jpg"
        },
        {
            des:"Internet of Things Forum Africa Exhibition 3",
            img:"/images/events/events3.jpg"
        },
    ]


    //heading view point and animation hook
   //  const [headingRef,headingInview] = useInView({threshold:0.1})
   //  const headingAnimation = useAnimation();

    //img view point and animation hook
   //  const [ImgRef,imgInview] = useInView({threshold:0.1})
   //  const imgAnimation = useAnimation();


   //  useEffect(()=>{
   //      if(headingInview){
   //          headingAnimation.start({
   //          opacity:1,
   //          y:'0',
   //          transition:{
   //              ease: "linear",
   //              duration:0.7
   //          }
   //          })
   //      }else{
   //          headingAnimation.start({
   //          opacity:0,
   //          y:'20vh',
   //          })
   //      }


   //      if(imgInview){
   //          imgAnimation.start({
   //          opacity:1,
   //          x:'0',
   //          transition:{
   //              ease: "linear",
   //              duration:0.7
   //          }
   //          })
   //      }else{
   //          imgAnimation.start({
   //          opacity:0,
   //          x:'-20vw',
   //          })
   //      }
   //  },[headingInview,imgInview])

  return (
    <>
      {/* <section className='events-area pt-100 pb-70'>
        <div className='container event-container'>
          <div className='section-title'>
            <motion.h2 ref={headingRef} animate={headingAnimation}>Beat the stress in <span>Zestos</span></motion.h2>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='events-box'>
                <motion.img src='/images/events/game_count.gif' alt='image'/>
                <div className='content'>
                  <h3>Global Robotics Summit & Festival</h3>
                  
                </div>
                <Link href='/single-events'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='events-item-list'>

                {
                    data.map((detail,index)=>{
                        return(
                            <motion.div className='single-events-box' key={detail.des}>
                                <div className='row m-0'>
                                    <div className='col-lg-4 col-md-4 p-0'>
                                    <div className= {`image bg-${index+1}`}>
                                        
                                        <Link href='/single-events'>
                                        <a className='link-btn'></a>
                                        </Link>
                                    </div>
                                    </div>

                                    <div className='col-lg-8 col-md-8 p-0'>
                                    <div className='content'>
                                        <h3>
                                        <Link href='/single-events'>
                                            <a>
                                                {detail.des}
                                            </a>
                                        </Link>
                                        </h3>
                                    </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }

              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="tp-feature-arae pt-130 pb-100 p-relative">

         <div className="container">
            <div className="row">
            
               <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s">
                  <motion.div 
                     className="tp-fea-img"
                     initial={{opacity:0,x:'-10vw'}}
                     whileInView={{x:0,opacity:1}}
                     viewport={{once:false,amount:0.7}}
                     transition={{staggerChildren:0.9,duration:0.7}}
                  >
                     <img src="images/hero/fea-1.png" alt=""/>
                  </motion.div>
               </div>

               <div className="col-xl-6 col-lg-6  wow tpfadeRight"  data-wow-duration=".5s" data-wow-delay=".7s">
                  <div className="tp-fea-right-side">
                     <div className="tp-fea-section-box">
                        <h5 className="tp-subtitle pb-10">Why Choose us</h5>
                        <h2 className="tp-title-sm pb-30">
                           Specialist in aviding clients of financial &nbsp;
                           <span className="tp-section-highlight">
                              challenges
                              <svg width="240" height="11" viewBox="0 0 240 11" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
                              </svg>
                           </span>
                        </h2>
                     </div>
                     <div className="fea-wrapper-main">
                        <motion.div 
                           className="tp-feature-list d-flex"
                           initial={{opacity:0,y:'10vh'}}
                           whileInView={{y:0,opacity:1}}
                           viewport={{once:false,amount:0.9}}
                           transition={{staggerChildren:0.9,duration:0.9}}
                        >
                           <div className="tp-feature-list__icon-img fea-color-1 mr-25">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                 <g clipPath="url(#clip0_496_130)">
                                 <path d="M6.10492 6.4812L4.02565 6.64184C3.44708 6.68656 2.93179 6.98979 2.61182 7.47377L0.213854 11.1006C-0.0288162 11.4676 -0.067394 11.9269 0.110589 12.3293C0.288619 12.7317 0.654475 13.0121 1.08924 13.0794L2.99305 13.3743C3.43841 11.0108 4.50452 8.65323 6.10492 6.4812Z" fill="currentColor"/>
                                 <path d="M10.6255 21.0069L10.9204 22.9107C10.9877 23.3455 11.2681 23.7113 11.6705 23.8893C11.8379 23.9634 12.015 23.9999 12.1913 23.9999C12.439 23.9999 12.6849 23.9278 12.8992 23.786L16.5261 21.3881C17.0101 21.0681 17.3133 20.5528 17.358 19.9743L17.5186 17.895C15.3465 19.4955 12.989 20.5616 10.6255 21.0069Z" fill="currentColor"/>
                                 <path d="M9.90947 19.6874C9.97557 19.6874 10.042 19.682 10.1084 19.6709C11.0985 19.5054 12.0529 19.2265 12.9633 18.8614L5.13853 11.0366C4.77347 11.947 4.49456 12.9013 4.329 13.8916C4.26375 14.2819 4.39467 14.6795 4.67447 14.9594L9.04056 19.3255C9.27287 19.5577 9.58641 19.6874 9.90947 19.6874Z" fill="currentColor"/>
                                 <path d="M22.0865 10.6407C24.0013 6.93881 24.0722 3.02684 23.9721 1.19216C23.9379 0.563527 23.4367 0.0623433 22.808 0.0280779C22.5093 0.0117655 22.1552 0 21.7562 0C19.7047 0 16.4586 0.310732 13.3595 1.9137C10.8966 3.18762 7.66708 5.99264 5.76172 9.67896C5.78422 9.69653 5.8062 9.71519 5.82692 9.73591L14.2644 18.1733C14.2851 18.1941 14.3037 18.216 14.3213 18.2385C18.0076 16.3331 20.8126 13.1036 22.0865 10.6407ZM13.9547 5.07371C15.3254 3.70305 17.5557 3.70291 18.9265 5.07371C19.5905 5.73769 19.9562 6.62057 19.9562 7.55961C19.9562 8.49865 19.5905 9.38154 18.9265 10.0455C18.2412 10.7308 17.3407 11.0735 16.4406 11.0736C15.5402 11.0736 14.6401 10.731 13.9547 10.0455C13.2907 9.38154 12.925 8.49865 12.925 7.55961C12.925 6.62057 13.2907 5.73769 13.9547 5.07371Z" fill="currentColor"/>
                                 <path d="M14.9489 9.05108C15.7713 9.8735 17.1096 9.87355 17.932 9.05108C18.3304 8.65264 18.5498 8.12295 18.5498 7.55952C18.5498 6.99608 18.3304 6.46639 17.932 6.068C17.5208 5.65677 16.9806 5.45117 16.4404 5.45117C15.9003 5.45117 15.3601 5.65677 14.9489 6.068C14.5505 6.46639 14.3311 6.99608 14.3311 7.55952C14.3311 8.12295 14.5505 8.65269 14.9489 9.05108Z" fill="currentColor"/>
                                 <path d="M0.717309 19.7783C0.897262 19.7783 1.07721 19.7097 1.21446 19.5723L3.51007 17.2767C3.78467 17.0021 3.78467 16.557 3.51007 16.2824C3.23553 16.0078 2.79031 16.0078 2.51571 16.2824L0.220105 18.578C-0.0544883 18.8526 -0.0544883 19.2977 0.220105 19.5723C0.357402 19.7096 0.537355 19.7783 0.717309 19.7783Z" fill="currentColorF"/>
                                 <path d="M5.61382 18.3861C5.33927 18.1115 4.89405 18.1115 4.61946 18.3861L0.205945 22.7996C-0.0686484 23.0742 -0.0686484 23.5194 0.205945 23.794C0.343242 23.9313 0.523195 23.9999 0.703148 23.9999C0.883102 23.9999 1.06305 23.9313 1.2003 23.7939L5.61377 19.3805C5.88841 19.1059 5.88841 18.6607 5.61382 18.3861Z" fill="currentColor"/>
                                 <path d="M6.72319 20.4899L4.42763 22.7855C4.15303 23.0601 4.15303 23.5053 4.42763 23.7799C4.56492 23.9171 4.74488 23.9858 4.92478 23.9858C5.10469 23.9858 5.28469 23.9172 5.42194 23.7799L7.71755 21.4842C7.99214 21.2096 7.99214 20.7645 7.71755 20.4899C7.443 20.2153 6.99778 20.2153 6.72319 20.4899Z" fill="currentColor"/>
                                 </g>
                                 <defs>
                                 <clipPath id="clip0_496_130">
                                 <rect width="24" height="24" fill="white"/>
                                 </clipPath>
                                 </defs>
                                 </svg>
                           </div>
                           <div className="tp-feature-list__content">
                              <h4>Fast working process</h4>
                              <p>At collax we specialize in designing, building, <br/> shipping and scaling beautifu.</p>
                           </div>
                        </motion.div>

                        <motion.div 
                           className="tp-feature-list  d-flex"
                           initial={{opacity:0,y:'10vh'}}
                           whileInView={{y:0,opacity:1}}
                           viewport={{once:false,amount:0.9}}
                           transition={{staggerChildren:0.9,duration:0.9}}
                        >
                           <div className="tp-feature-list__icon-img fea-color-2 mr-25">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clipPath="url(#clip0_496_139)">
                                 <path d="M20.5358 12.812H18.6797C18.8689 13.33 18.9722 13.889 18.9722 14.4716V21.4864C18.9722 21.7293 18.93 21.9625 18.853 22.1793H21.9215C23.0678 22.1793 24.0002 21.2468 24.0002 20.1006V16.2765C24.0003 14.3662 22.4461 12.812 20.5358 12.812Z" fill="currentColor"/>
                                 <path d="M5.02806 14.4716C5.02806 13.8889 5.13142 13.33 5.3206 12.812H3.46454C1.55419 12.812 0 14.3662 0 16.2765V20.1007C0 21.2469 0.932486 22.1794 2.07872 22.1794H5.14726C5.07034 21.9625 5.02806 21.7293 5.02806 21.4864V14.4716Z" fill="currentColor"/>
                                 <path d="M14.1218 11.0071H9.8786C7.96825 11.0071 6.41406 12.5613 6.41406 14.4716V21.4865C6.41406 21.8691 6.72428 22.1794 7.10697 22.1794H16.8935C17.2761 22.1794 17.5864 21.8692 17.5864 21.4865V14.4716C17.5864 12.5613 16.0322 11.0071 14.1218 11.0071Z" fill="currentColor"/>
                                 <path d="M12 1.82056C9.70259 1.82056 7.8335 3.68965 7.8335 5.98714C7.8335 7.5455 8.69361 8.90652 9.96383 9.62109C10.5663 9.95999 11.2609 10.1537 12 10.1537C12.7392 10.1537 13.4338 9.95999 14.0362 9.62109C15.3065 8.90652 16.1666 7.54546 16.1666 5.98714C16.1666 3.6897 14.2975 1.82056 12 1.82056Z" fill="currentColor"/>
                                 <path d="M4.68389 5.7041C2.96569 5.7041 1.56787 7.10192 1.56787 8.82012C1.56787 10.5383 2.96569 11.9361 4.68389 11.9361C5.11974 11.9361 5.53477 11.8459 5.91179 11.6836C6.56363 11.4029 7.1011 10.9062 7.43368 10.2839C7.66712 9.84716 7.79992 9.34892 7.79992 8.82012C7.79992 7.10196 6.4021 5.7041 4.68389 5.7041Z" fill="currentColor"/>
                                 <path d="M19.3162 5.7041C17.598 5.7041 16.2002 7.10192 16.2002 8.82012C16.2002 9.34897 16.333 9.8472 16.5664 10.2839C16.899 10.9062 17.4365 11.403 18.0883 11.6836C18.4653 11.8459 18.8804 11.9361 19.3162 11.9361C21.0344 11.9361 22.4322 10.5383 22.4322 8.82012C22.4322 7.10192 21.0344 5.7041 19.3162 5.7041Z" fill="currentColor"/>
                                 </g>
                                 <defs>
                                 <clipPath id="clip0_496_139">
                                 <rect width="24" height="24" fill="white"/>
                                 </clipPath>
                                 </defs>
                                 </svg>
                           </div>

                           <div className="tp-feature-list__content">
                              <h4>Didicated team</h4>
                              <p>At collax we specialize in designing, building, <br/> shipping and scaling beautifu.</p>
                           </div>

                        </motion.div>

                        <motion.div 
                           className="tp-feature-list  d-flex"
                           initial={{opacity:0,y:'10vh'}}
                           whileInView={{y:0,opacity:1}}
                           viewport={{once:false,amount:0.9}}
                           transition={{staggerChildren:0.9,duration:0.9}}
                           >
                           <div className="tp-feature-list__icon-img fea-color-3 mr-25">
                              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15.7423 0.00474192C15.2913 -0.0425081 14.882 0.268281 14.8267 0.716883C14.7707 1.16707 15.0895 1.57646 15.5388 1.63252C16.6523 1.77109 17.7402 2.16534 18.7728 2.60114C19.1949 2.77647 19.6728 2.57872 19.8479 2.16375C20.0233 1.74561 19.8279 1.26491 19.4105 1.0887C18.2385 0.595203 17.004 0.16175 15.7423 0.00474192V0.00474192Z" fill="currentColor"/>
                                 <path d="M24.9534 6.66668C25.3147 6.39269 25.3852 5.87759 25.1112 5.51709C24.343 4.50532 23.4402 3.60248 22.4284 2.83423C22.0671 2.56189 21.5536 2.62997 21.2788 2.99206C21.0048 3.35256 21.0753 3.86766 21.4366 4.14165C22.3298 4.81939 23.1261 5.61564 23.8038 6.50885C24.0787 6.87088 24.593 6.93935 24.9534 6.66668V6.66668Z" fill="currentColor"/>
                                 <path d="M25.7815 8.09729C25.3642 8.27354 25.1687 8.75419 25.3442 9.17233C25.78 10.2049 26.2271 11.3475 26.3658 12.461C26.4195 12.8961 26.8129 13.2277 27.2814 13.1732C27.7308 13.1171 28.0496 12.7077 27.9935 12.2575C27.8365 10.9958 27.35 9.70663 26.8566 8.53468C26.6804 8.1173 26.1989 7.92426 25.7815 8.09729V8.09729Z" fill="currentColor"/>
                                 <path d="M8.58965 1.08871C8.17227 1.26497 7.97682 1.74562 8.15226 2.16376C8.32769 2.5796 8.80626 2.7761 9.2273 2.60115C10.2599 2.16535 11.3478 1.7711 12.4613 1.63252C12.9107 1.57647 13.2296 1.16708 13.1734 0.716892C13.1174 0.268291 12.7064 -0.0425531 12.2578 0.00475154C10.9961 0.161759 9.76165 0.595213 8.58965 1.08871Z" fill="currentColor"/>
                                 <path d="M14 28C21.0207 28 27.126 22.6989 27.9935 15.7423C28.0496 15.2929 27.7308 14.8827 27.2814 14.8267C26.8296 14.7762 26.4211 15.0895 26.3658 15.5388C25.5999 21.6768 20.1948 26.3593 14 26.3593C7.2148 26.3593 1.64062 20.7852 1.64062 14C1.64062 11.0095 2.82717 8.09921 4.7578 5.87649V6.14807C4.7578 6.60149 5.1247 6.96838 5.57811 6.96838C6.03153 6.96838 6.39842 6.60149 6.39842 6.14807V3.82812C6.39842 3.37471 6.03153 3.00781 5.57811 3.00781H3.2574C2.80399 3.00781 2.43709 3.37471 2.43709 3.82812C2.43709 4.28154 2.80399 4.64789 3.2574 4.64789H3.65246C1.38026 7.1885 0 10.5412 0 14C0 21.6896 6.31038 28 14 28V28Z" fill="currentColor"/>
                                 <path d="M4.10156 14C4.10156 19.4282 8.57183 23.8984 14 23.8984C19.4282 23.8984 23.8984 19.4282 23.8984 14C23.8984 8.57183 19.4282 4.10156 14 4.10156C8.57183 4.10156 4.10156 8.57183 4.10156 14ZM14.8203 10.7188C14.8203 10.2653 15.1872 9.89844 15.6406 9.89844C16.094 9.89844 16.4609 10.2653 16.4609 10.7188V13.1797H18.1016V10.7188C18.1016 10.2653 18.4685 9.89844 18.9219 9.89844C19.3753 9.89844 19.7422 10.2653 19.7422 10.7188V17.2812C19.7422 17.7347 19.3753 18.1016 18.9219 18.1016C18.4685 18.1016 18.1016 17.7347 18.1016 17.2812V14.8203H15.6406C15.1872 14.8203 14.8203 14.4534 14.8203 14V10.7188ZM10.7188 11.5391C10.2662 11.5391 9.89844 11.9068 9.89844 12.3594C9.89844 12.8128 9.53154 13.1797 9.07812 13.1797C8.62471 13.1797 8.25781 12.8128 8.25781 12.3594C8.25781 11.0024 9.36173 9.89844 10.7188 9.89844C12.0758 9.89844 13.1797 11.0024 13.1797 12.3594C13.1797 14 12.0878 14.8187 11.2106 15.4764C10.7247 15.8411 10.3786 16.1328 10.1589 16.4609H12.3594C12.8128 16.4609 13.1797 16.8278 13.1797 17.2812C13.1797 17.7347 12.8128 18.1016 12.3594 18.1016H9.07812C8.62471 18.1016 8.25781 17.7347 8.25781 17.2812C8.25781 15.6406 9.3497 14.8219 10.2269 14.1642C11.0649 13.5354 11.5391 13.1412 11.5391 12.3594C11.5391 11.9067 11.1714 11.5391 10.7188 11.5391Z" fill="currentColor"/>
                              </svg>
                           </div>

                           <div className="tp-feature-list__content">
                              <h4>24/7 hours support</h4>
                              <p>At collax we specialize in designing, building, <br/> shipping and scaling beautifu.</p>
                           </div>

                        </motion.div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
    </>
  );
};

export default EventsArea;
