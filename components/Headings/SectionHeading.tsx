import { Heading } from '@chakra-ui/react'
import { type } from 'os'
import React from 'react'

interface SectionHeadingProps{
    title: string
}

export default function SectionHeading( { title}: SectionHeadingProps) {
  return (
    <Heading size={"lg"} my='1.5rem'>{title}</Heading>
  )
}
