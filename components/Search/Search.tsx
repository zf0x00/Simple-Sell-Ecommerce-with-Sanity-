import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { SearchInputStyles } from "../styles/styles"

export default function Search() {
  return (
    <Box>
    <InputGroup size='md' w={{ base: "100%", lg:'32rem'}}>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input {...SearchInputStyles}/>
  </InputGroup>
  </Box>
  )
}
