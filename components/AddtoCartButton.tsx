import { Button } from '@chakra-ui/react'
import React from 'react'

export default function AddtoCartButton() {
  return (
    <Button variant='outline' _hover={{ bgColor: 'brand.secondary'}}  rounded='full' size='sm' w='150px'>Add to Cart</Button>
  )
}
