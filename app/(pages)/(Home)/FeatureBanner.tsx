import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FeatureBannerStyles, FHeadingStyles } from './FeatureBannerStyles'
import Link from 'next/link'

export const FeatureBanner = () => {
  return (
    <Flex {...FeatureBannerStyles}>
        <Box w={{base: '100%', lg: '50%'}}>
          <Heading {...FHeadingStyles}>
            Online Simple Shop <br/> Sell Easy
          </Heading>
          <Text fontSize={{base:'lg', lg:'xl'}} py='1rem' maxW='600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, cupiditate. Atque veniam numquam dolor obcaecati quaerat illo facilis sunt harum eius magnam accusamus porro, commodi dolores esse dolore illum doloribus?</Text>
          <Link href='/products'>
          <Button rounded='full' bgColor='brand.secondary' _hover={{bgColor:'brand,priamry' }}>Shop Now</Button>
          </Link>
        </Box>
        <Box w={{base: '100%', lg: '50%'}}>
          <Box m={10} w={{ base: '300px', lg:'700px'}} h={{ base: '300px', lg:'500px'}} bg='center / cover no-repeat url(mockup.svg)' alignItems='center'/>
        </Box>
    </Flex>
  )
}
 