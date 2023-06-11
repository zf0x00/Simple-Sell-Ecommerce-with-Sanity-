import { Card, CardBody, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function TopCategoryCard() {
  return (
    <Card direction='row' align='center' overflow='hidden' variant='outline' w='100%' h='100%' p='10px' _hover={{cursor:'pointer', bgColor:"gray.100"}}>
        <Image src='/product1.jpg' alt='' width={100} height={100}/>
        <CardBody>
            <Heading size={{ base: 'sm', lg:'md'}}>Mobiles</Heading>
        </CardBody>
        <Text></Text>
    </Card>
  )
}
