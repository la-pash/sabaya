import React from 'react'
    import HeroSection from '../components/HeroSection'
    import FeaturedAbayas from '../components/FeaturedAbayas'
    import Testimonials from '../components/Testimonials'
    import Location from '../components/Location'

    export default function Home() {
      return (
        <div className="space-y-8">
          <HeroSection />
          <FeaturedAbayas />
          <Testimonials />
          <Location />
        </div>
      )
    }
