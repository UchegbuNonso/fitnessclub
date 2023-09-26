import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import hero_image from './img/hero_image.png';
import hero_image_back from './img/hero_image_back.png';
import Heart from './img/heart.png';
import Calories from './img/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter'


const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ?
   true: false
  return (
    <div className="hero" id='Home'>
    <div className='blur hero-blur'></div>
        <div className="left-h">
            <Header/>
            {/* ==========The best ad ============= */}
            <div className="the-best">
              <motion.div
                initial ={{left: mobile ? '164px' : '238px'}}
                whileInView ={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                >
                
              </motion.div>
              <span>The best fitness club in the town</span>
            </div>

            {/* =================The Hero Heading=============== */}
            <div className="hero-text">
              <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
              </div>
              <div>
              <span>Ideal body</span>
              </div>
              <div>
              <span>
                In here we will help you to shape and build your ideal body
                and live your life to the fullest
              </span>
              </div>
            </div>
            {/*====== Figures ============*/}
            <div className="figures">
              <div>
              <span>
              {/* 140+ */}
            <NumberCounter end={144} start={100} delay='4' postFix="+" />
              </span>
              <span>expert coaches</span>
              </div>
              <div>
              <span>
              {/* 900+ */}
              <NumberCounter end={960} start={750} delay='4' postFix="+" />
              </span>
              <span>members joined</span>
              </div>
              <div>
              <span>
              {/* 50+ */}
              <NumberCounter end={50} start={0} delay='4' postFix="+" />
              </span>
              <span>fitness programs</span>
              </div>

            </div>

            {/* ============= Hero Buttons ============ */}
            <div className="hero-btn">
              <button className="btn">Get started</button>
              <button className="btn">Learn more</button>
            </div>
        </div>
        <div className="right-h">
         <button className='btn'>Join Now</button>
         <motion.div
         initial= {{right: '-1rem'}} 
         whileInView={{right: '4rem'}}
         transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
          
         </motion.div>
         {/* ====== HERO IMAGE ========= */}
         <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial = {{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />
         {/* ============= CALORIES ============ */}
         <motion.div 
         initial= {{right: '37rem'}} 
         whileInView={{right: '28rem'}}
         transition={transition}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>230 kcal</span>
          </div>
          
         </motion.div>
         </div>
    </div>
  )
}

export default Hero