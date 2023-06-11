import TopCategoryCard from '@/components/Card/TopCategoryCard'
import SectionHeading from '@/components/Headings/SectionHeading'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

export default function TopCategories() {
  return (
    <Box w={{base: '100%', lg:'90%'}} mx='auto' py='3rem' px='2rem'>
<SectionHeading title={'Top Categories'}/>
<Grid templateColumns={{base: "repeat(1, 1fr)", md: 'repeat(2, 1fr)', lg: 'repeat(5,1fr)'}} gap={3}>
    <GridItem>
    <TopCategoryCard/>
    </GridItem>
    <GridItem>
    <TopCategoryCard/>
    </GridItem>
    <GridItem>
    <TopCategoryCard/>
    </GridItem>
    <GridItem>
    <TopCategoryCard/>
    </GridItem>
    <GridItem>
    <TopCategoryCard/>
    </GridItem>
</Grid>
    </Box>
  )
}
