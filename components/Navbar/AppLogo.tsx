import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function AppLogo() {
  return (
    <Link href='/'>
   <Text color='black' fontWeight='bold' fontSize='28'>Simple
   {' '}
    <Text as='span' color='brand.primary'>Buy</Text>
   </Text>
   </Link>
  )
}
