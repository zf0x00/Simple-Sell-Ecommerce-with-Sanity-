import { Box } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { FaChevronLeft , FaChevronRight } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';

export default function SwiperNavButton() {

    const swiper = useSwiper();

  return (
    <Box m='1.5rem'>
        <IconButton
              rounded='lg'
              icon={<FaChevronLeft />}
              borderColor='brand.primary'
              borderWidth='1px'
              bgColor='white'
              color='brand.priamry'
              onClick={() => swiper.slidePrev()}
              mx='1' aria-label={'Prev'} />

<IconButton
              rounded='lg'
              icon={<FaChevronRight />}
              borderColor='brand.primary'
              borderWidth='1px'
              bgColor='white'
              color='brand.priamry'
              onClick={() => swiper.slideNext()}
              mx='1' aria-label={'Next'} />
    </Box>
  )
}
