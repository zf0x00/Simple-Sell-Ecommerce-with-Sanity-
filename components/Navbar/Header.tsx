import { Box } from '@chakra-ui/react'
import React from 'react'
import { navbarStyles } from '../styles/styles'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header() {
  return (
<Box h={{base: 180, lg: '100px'}}>
   <Box {...navbarStyles}>
<DesktopNav/>
<MobileNav/>
   </Box>
   </Box>
  )
}
 