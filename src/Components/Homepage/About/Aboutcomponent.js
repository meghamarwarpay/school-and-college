import React from 'react'
import AboutUs from './AboutUs'
import AboutBanner from './AboutBanner'
import OurDeteil from './OurDeteil'
import Marquee from '@/Components/Marques/Marquee'

function Aboutcomponent() {
    return (
        <div>
            <AboutBanner />
            <Marquee />
            <AboutUs />
            <OurDeteil />
            
        </div>
    )
}

export default Aboutcomponent