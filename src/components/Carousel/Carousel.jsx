import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Carousel.scss'
import image1 from '../../assets/CarouselImages/1.jpg'
import image2 from '../../assets/CarouselImages/2.jpg'
import image3 from '../../assets/CarouselImages/3.jpg'
import image4 from '../../assets/CarouselImages/4.jpg'
import image5 from '../../assets/CarouselImages/5.jpg'



const CardItems = [
  {
    image: image1,
    title: "Mountains",
    card_no: 1
  },
  {
    image: image2,
    title: "Beach",
    card_no: 2
  },
  {
    image: image3,
    title: "Trees",
    card_no: 3
  },
  {
    image: image4,
    title: "Peacefull",
    card_no: 4
  },
  {
    image: image5,
    title: "Vacation",
    card_no: 5
  },
]

const Card = (props) => {
  return (
    <>
      <div className='CardContainer'>
        <img className='CardImage' src={props.image} loading='lazy' alt="Error" width="1rem" height="1rem" />
        {props.CardMain ? <p className='CardTitle'>{props.title}</p> : null}

      </div>
    </>
  )
}


export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const buttonNextRef = useRef(null);
  const buttonPrevRef = useRef(null);
  const defaultClasses = ['LeftCard', 'MainCard', 'RightCard', 'LeftMostCard', 'RightMostCard'];
  const animationClasses = [showAnimation ? 'LeftCardAnimation' : '', showAnimation ? 'MainCardAnimation' : '', showAnimation ? 'RightCardAnimation' : '', showAnimation ? 'LeftMostCardAnimation' : '', showAnimation ? 'RightMostCardAnimation' : ''];

  const NextSlide = () => {
    buttonNextRef.current.disabled = true
    buttonPrevRef.current.disabled = true
    let nextIndex = (activeIndex + 1) % CardItems.length;
    setActiveIndex(nextIndex < 0 ? CardItems.length - 1 : nextIndex);
    setShowAnimation(true)
    setTimeout(() => {
      setShowAnimation(false)
      buttonNextRef.current.disabled = false
      buttonPrevRef.current.disabled = false
    }, 1000);

  };

  const PrevSlide = () => {
    buttonNextRef.current.disabled = true
    buttonPrevRef.current.disabled = true
    let prevIndex = (activeIndex - 1 + CardItems.length) % CardItems.length;
    setActiveIndex(prevIndex);
    setShowAnimation(true)
    setTimeout(() => {
      setShowAnimation(false)
      buttonNextRef.current.disabled = false
      buttonPrevRef.current.disabled = false
    }, 1000);
  };

  return (
    <>
      <div className='Wrapper'>
        <div className='title'>
          <h1>Featured Products</h1>
          <span>Explore and discover a variety of products</span>
        </div>


        <div className='Carousel'>
          <div className="slider">
            <div className={`${defaultClasses[3]}  ${animationClasses[3]}`} >
              <Card image={CardItems[(activeIndex - 2 + CardItems.length) % CardItems.length].image} title={CardItems[(activeIndex - 1 + CardItems.length) % CardItems.length].title} />
            </div>
            <div className={`${defaultClasses[0]}  ${animationClasses[0]}`} >
              <Card image={CardItems[(activeIndex - 1 + CardItems.length) % CardItems.length].image} title={CardItems[(activeIndex - 1 + CardItems.length) % CardItems.length].title} />
            </div>
            <div className={`${defaultClasses[1]} ${animationClasses[1]} `}>
              <Card image={CardItems[activeIndex].image} title={CardItems[activeIndex].title} CardMain={true} />
            </div>
            <div className={`${defaultClasses[2]} ${animationClasses[2]} `}>
              <Card image={CardItems[(activeIndex + 1) % CardItems.length].image} title={CardItems[(activeIndex + 1) % CardItems.length].title} />
            </div>
            <div className={`${defaultClasses[4]} ${animationClasses[4]} `}>
              <Card image={CardItems[(activeIndex + 2) % CardItems.length].image} title={CardItems[(activeIndex + 1) % CardItems.length].title} />
            </div>
          </div>
          <div className='CardActions'>
            <button className='Leftbtn' ref={buttonPrevRef} onClick={PrevSlide} > <FaChevronLeft /> </button>
            <button className='Rightbtn' ref={buttonNextRef} onClick={NextSlide} > <FaChevronRight /> </button>
          </div>
        </div>
      </div>
    </>
  )
}


