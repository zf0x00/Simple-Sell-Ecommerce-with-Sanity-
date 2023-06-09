import { Box } from '@chakra-ui/react'
import React from 'react'
import { navbarStyles } from './styles'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header() {
  return (
   <Box {...navbarStyles}>
<DesktopNav/>
<MobileNav/>
   </Box>
  )
}
 