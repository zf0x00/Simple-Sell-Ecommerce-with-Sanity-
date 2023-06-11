import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Rating from '../Rating'
import AddtoCartButton from '../AddtoCartButton'

export default function ProductCard() {
  return (
    <Card w='xs' pos='relative' m='0.5rem'>
    <CardBody>
      <Image
        src='/product3.jpg'
        alt='Green double couch with wooden legs'
        width='300'
        height='300'
        style={{borderRadius: 10}}
      />
      <Stack mt='6' spacing='3'>
        <Flex justify='space-between' align='center'>
        <Heading size='md' noOfLines={1}>Living room Sofa</Heading>
        <Flex color='brand.primary'>
        <Text fontSize='sm'>$</Text>
        <Text fontSize='xl'fontWeight='bold'>100</Text>
        </Flex>
        </Flex>
        <Text noOfLines={2} fontSize='sm'>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
        <Rating/>
        <AddtoCartButton/>
      </Stack>
    </CardBody>
  </Card>
  )
}
