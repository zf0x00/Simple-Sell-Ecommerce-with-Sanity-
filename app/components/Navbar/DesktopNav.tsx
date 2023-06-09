import { Box, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import {
  cartsectionStyles,
  desktopnavStyles,
  logosectionStyles,
} from "./styles";
import AppLogo from "./AppLogo";
import { navItems } from "@/app/utils/helpers";
import Link from "next/link";
import Search from "../Search/Search";

export default function DesktopNav() {
  return (
    <Flex {...desktopnavStyles}>
      <Stack {...logosectionStyles}>
        <Box>
          <AppLogo />
        </Box>
        {/* Menu Section That shows text in the frontend */}
          {navItems.map((navItem) => (
            <Box key={navItem.label}>
              <Link href={navItem.href}>{navItem.label}</Link>
            </Box>
          ))}
        <Box><Search/></Box>
      </Stack>

      <Stack {...cartsectionStyles}>
        <Box>Whilist</Box>
        <Box>Cart</Box>
      </Stack>
    </Flex>
  );
}
