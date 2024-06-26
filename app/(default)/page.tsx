export const metadata = {
  title: 'SEO tool hub:One-Stop Solution for all your SEO needs.',
  description: 'SEO tool hub is a One-Stop Solution for all your SEO needs. Includes keyword research, backlink analysis, and rank tracking tools ',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {

  return (
  
    <>
      <Hero />
      <FeaturesBlocks />
     {/*
	  <Features />
	 <Testimonials />*/}
      {/*<Newsletter />*/}
    </>
	
  )
}
