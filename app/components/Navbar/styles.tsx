import { BoxProps, FlexProps, InputProps, StackProps } from "@chakra-ui/react";

export const navbarStyles: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  mb: "1rem",
  zIndex: 10,
  textColor: 'black'
};

export const desktopnavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2",
  py: "3",
  borderBottomWidth: "1px",
  borderColor: "gray.200",
  display:{base: 'none', lg:'flex'},
};

export const logosectionStyles: StackProps = {
  direction: "row",
  gap: 6,
  flex: 1,
  alignItems: "center",
};

export const cartsectionStyles: StackProps = {
  direction: "row",
  alignItems: "end",
  px: "40",
  spacing: 3,
};

export const SearchInputStyles: InputProps = {
  type: "text",
  placeholder: "Search",
  focusBorderColor: "brand.primary",
  borderWidth: "1",
  borderColor: "gray.500",
};

export const MobileNavStyles: FlexProps = {
  justify: "center",
  align: "center",
  px: "2rem",
  py: "1rem",
  borderBottom: "1px",
  borderColor: "gray.400",
  display:{base: 'flex', lg:'none'},

};


export const MobileSearchStyles: FlexProps = {
  px: "2rem",
  py: "1rem",
  mb: "1px",
  borderColor: "gray.400",
  display:{base: 'flex', lg:'none'},

};