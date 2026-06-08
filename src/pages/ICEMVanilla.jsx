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
import CommonReasons from '../components/ICEMCommon/CommonReasons'
import CommonTestimonials from '../components/ICEMCommon/CommonTestimonials'
import FutureWithIcem from '../components/ICEMCommon/FutureCommon'
import Footer from './Footer'
import FAQ from '../components/ICEMCommon/FAQ'
const ICEMCommon = () => {
  return (
    <div>
      <CommonHero />
      <CommonPlacement />
      <CommonRecruters />
      <CommonBanner />
      <CommonReasons />
      <CommonSpecialization />
      <CommonBrochure />
      <CommonPointers />
      <CommonStudying />
      <CommonPossibilities />
      <CommonHighlights />
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
