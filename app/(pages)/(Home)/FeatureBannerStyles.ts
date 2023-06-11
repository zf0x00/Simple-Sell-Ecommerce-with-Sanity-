import { FlexProps, HeadingProps } from "@chakra-ui/react";

export const FeatureBannerStyles: FlexProps = {
    justify:'center', align:'center', gap:'2', flexDir:{base: 'column', lg:'row'}, w:{base:'100%', lg:'90%'}, mx:"auto", p:'2rem',
}

export const FHeadingStyles: HeadingProps={
    size: {base: 'xl', lg: '3xl'},
    justifyItems: 'center',
    alignItems:'center',
    lineHeight:'4rem',
    color:'brand.primary',
}