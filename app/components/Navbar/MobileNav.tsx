import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AppLogo from './AppLogo'
import { MobileNavStyles, MobileSearchStyles } from './styles'
import Search from '../Search/Search'

export default function MobileNav() {
  return (
    <>
    <Flex {...MobileNavStyles}>
        <Box>
        Nav Menu
        </Box>
        <AppLogo/>
        <Stack spacing={1}>
            <Text>Wlist</Text>
            <Text>Cart</Text>
        </Stack>
    </Flex>
    <Box {...MobileSearchStyles}>
        <Search/>
    </Box>
    </>
  )
}
