"use client";
import { Box } from '@chakra-ui/react'
import { FeatureBanner } from './(pages)/(Home)/FeatureBanner';
import TopCategories from './(pages)/(Home)/TopCategories';
import FeaturedProducts from './(pages)/(Home)/FeaturedProducts';

export default function Home() {
  return (
    <div>
<FeatureBanner/>
<TopCategories/>
<FeaturedProducts title={'Most Selling'}/>
<FeaturedProducts title={'Trending'}/>
<FeaturedProducts title={'Best Selling'}/>
    </div>
  )
}
