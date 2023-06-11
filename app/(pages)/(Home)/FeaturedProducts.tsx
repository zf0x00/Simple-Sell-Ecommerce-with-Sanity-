import ProductCard from '@/components/Card/ProductCard'
import React, { CSSProperties } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import {Navigation,Autoplay} from 'swiper'
import SwiperNavButton from '@/components/SwiperNavButton';
import SectionHeading from '@/components/Headings/SectionHeading';
import { Box } from '@chakra-ui/react';

const slidesettings: CSSProperties ={
    boxSizing:'border-box',
    maxWidth:'350px',
}

interface FeaturedProductsTitle {
    title: string
}

export const slidersettings: SwiperOptions = {
    modules:[Navigation,Autoplay],
    spaceBetween: 10,
    slidesPerView:'auto',
    speed:1000,
    autoplay:{
        delay: 5000,
        disableOnInteraction: false
    }
}
export default function FeaturedProducts({title}: FeaturedProductsTitle) {

  return (
       <Box w={{base: '100%', lg:'90%'}} mx='auto' py='1rem' px='2rem'>
        <SectionHeading title={title}/>
        <Swiper {...slidersettings} style={{ width: '100%', height: '100%'}}>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperSlide style={slidesettings}>
            <ProductCard/>
            </SwiperSlide>
            <SwiperNavButton/>
        </Swiper>
        </Box>
  )
}
