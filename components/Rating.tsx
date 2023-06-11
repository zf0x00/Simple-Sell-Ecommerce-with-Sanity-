import { themes } from '@/app/themes'
import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ReactStars from 'react-stars'
export default function Rating() {
  return (
    <Flex justifyItems='center' align='center'>
        <ReactStars count={5} value={2.5} half={true} size={18} color2={themes.colors.brand.primary} edit={false}/>
        <Text>({200})</Text>
    </Flex>
  )
}
