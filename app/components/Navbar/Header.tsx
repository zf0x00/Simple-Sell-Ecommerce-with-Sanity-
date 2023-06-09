import { Box } from '@chakra-ui/react'
import React from 'react'
import { navbarStyles } from './styles'
import DesktopNav from './DesktopNav'

export default function Header() {
  return (
   <Box {...navbarStyles}>
<DesktopNav/>
   </Box>
  )
}
 