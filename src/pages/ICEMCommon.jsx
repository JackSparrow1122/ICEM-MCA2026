{/* <EntcHero /> 
<EntcPlacement/>
<EntcRecruiters/>
<EntcBanner/> 
<EntcInovation/>
<EntcReasons/>
<EntcOfferings />
<EntcBrochure />
<EntcPointers />  
<EntcStudying />
<EntcApply />
<EntcTestimonials />
<Footer/> */}
import React from 'react'
import CommonHero from '../components/ICEMCommon/CommonHero'
import CommonPlacement from '../components/ICEMCommon/CommonPlacement'
import CommonRecruters from '../components/ICEMCommon/CommonRecruters'
import CommonSpecialization from '../components/ICEMCommon/CommonSpecialization'
import CommonBrochure from '../components/ICEMCommon/CommonBrochure'
import CommonPointers from '../components/ICEMCommon/CommonPointes'
import CommonStudying from '../components/ICEMCommon/CommonStudying'
import CommonApply from '../components/ICEMCommon/CommonApply'
import Headline from '../components/ICEMCommon/Headling'
import CommonBanner from '../components/ICEMCommon/CommonBanner'
// import CommonInovation from '../components/ICEMCommon/CommonInovation'
import CommonReasons from '../components/ICEMCommon/CommonReasons'
import CommonTestimonials from '../components/ICEMCommon/CommonTestimonials'
import FutureWithIcem from '../components/ICEMCommon/FutureWithIcem'
import Footer from '../pages/Footer'
const ICEMCommon = () => {
  return (
    <div>
      <CommonHero/>
      <CommonPlacement/>
      <CommonRecruters/>
      <CommonBanner/>
      {/* <CommonInovation/> */}
      <CommonReasons/>
      <CommonSpecialization/>
      <CommonBrochure/>
      <CommonPointers/>
      <CommonStudying/>
      <CommonApply/>
      <FutureWithIcem/>
      <Headline/>
      <CommonTestimonials/>
      <Footer/>
    </div>
  )
}

export default ICEMCommon
