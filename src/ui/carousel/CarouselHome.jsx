// https://learus.github.io/react-material-ui-carousel/

import React, { useState, useEffect } from 'react';

import { ItemCarousel } from './ItemCarousel';

import hoja  from '../../assets/carousel_home/hoja.jpg'
import mate1 from '../../assets/carousel_home/mate1.webp'
import mate2 from '../../assets/carousel_home/mate2.jpg'
import mateW from '../../assets/carousel_home/matewoman.webp'
import yerba from '../../assets/carousel_home/yerba.png'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Carousel from 'react-material-ui-carousel';


export const CarouselHome = () => {

    useEffect(() => {
        getImages()
    }, []);
    
    const [items, setItems] = useState([]);
    
    var images = [
        hoja,
        mate1,
        mate2,
        mateW,
        yerba
    ]

    const getImages = async() => {
        const resp = await images
        setItems(resp)
    }

    return (
        <Carousel
            NextIcon={<ArrowForwardIosIcon/>}
            PrevIcon={<ArrowBackIosNewOutlinedIcon/>}
            IndicatorIcon={false}
            // navButtonsAlwaysVisible={false}
            navButtonsAlwaysVisible={true}
            // fullHeightHover={true} 
            autoPlay={true}
            // autoPlay={true}
            animation='fade'
            duration='500'
            interval='3000'
            justifyContent='center'
            // height='500'
            // height='300px'
            // height={300}
            // sx={{height: '300px'}}
            // sx={{height: '300px',width:'400px'}}
            // height='300px'
            sx={{display:'flex', justifyContent:'center'}}
        >
            {
                items.map( (item, i) => (
                    <img
                    key={i} src={item}
                    style={{
                        // width: '100%',
                        // width: '1024px',
                        // height: '100%',
                        // height: '576px',
                        // objectFit:'contain',
                        objectFit:'fill',
                        padding: 0,
                        margin: 0,
                    }}
                    alt='img caoruseel' 
                />
                ))
            }


            {/* {
                items.map( (item, i) => (
                    <ItemCarousel key={i} img={item} /> 
                ))
            } */}
        </Carousel>
    )
}

