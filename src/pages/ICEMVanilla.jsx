import React from 'react'
import CommonHero from '../components/ICEMCommon/CommonHero'
import CommonPlacement from '../components/ICEMCommon/CommonPlacement'
import CommonRecruters from '../components/ICEMCommon/CommonRecruters'
import CommonSpecialization from '../components/ICEMCommon/CommonSpecialization'
import CommonBrochure from '../components/ICEMCommon/CommonBrochure'
import CommonPointers from '../components/ICEMCommon/CommonPointes'
import CommonStudying from '../components/ICEMCommon/CommonStudying'
import CommonPossibilities from '../components/ICEMCommon/CommonPossibilities'
import CommonHighlights from '../components/ICEMCommon/CommonHighlights'
import CommonApply from '../components/ICEMCommon/CommonApply'
import Headline from '../components/ICEMCommon/Headling'
import CommonBanner from '../components/ICEMCommon/CommonBanner'
import CommonTestimonials from '../components/ICEMCommon/CommonTestimonials'
import CommonInovation from '../components/ICEMCommon/CommonInovation'
import FutureWithIcem from '../components/ICEMCommon/FutureCommon'
import FAQ from '../components/ICEMCommon/FAQ'
import Footer from '../pages/Footer'


const ICEMCommon = () => {
  return (
    <div>
      <CommonHero />
      <CommonPointers />
      <CommonPlacement />
      <CommonRecruters />
      <CommonBanner />
      <CommonStudying />
      <CommonSpecialization />
      <CommonHighlights />
      <CommonPossibilities />
      <CommonBrochure />
      <CommonApply />
      <FutureWithIcem />
      <Headline />
      <CommonTestimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default ICEMCommon
