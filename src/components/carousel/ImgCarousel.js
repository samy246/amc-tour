import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../../assets/borabora.jpg'

import Pondicherry from '../../assets/images/img-2.jpg'
import Nilgiri from '../../assets/images/img-4.jpg'
import Goa from '../../assets/images/goa.jpg'
import resort from '../../assets/images/imges.jpg'


function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} alt='/' />
                    <p className="legend">Maldives </p>
                </div>
                <div>
                    <img src={Nilgiri} alt='/' />
                    <p className="legend">Nilgiri</p>
                </div>
                <div>
                    <img src={Pondicherry} alt='/' />
                    <p className="legend">Pondicherry</p>
                </div>
                <div>
                    <img src={Goa} alt='/' />
                    <p className="legend">Goa</p>
                </div>
                <div>
                    <img src={resort} alt='/' />
                    <p className="legend">Pondicherry</p>
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
