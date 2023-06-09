import HomeCenterSide from '@/components/homePageComponents/homecenterside'
import HomeLeftSide from '@/components/homePageComponents/homeleftside'

import HomeRightSide from '@/components/homePageComponents/homerightside'
import MetaSeo from '@/metaSeo/metaSeo'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
   <>
   <MetaSeo title="Feed | Linkedin" />
    <div className="padding-section container grid grid-cols-1 lg:grid-cols-4 items-start gap-5">
      <HomeLeftSide />
      <HomeCenterSide />
      <HomeRightSide />
     
    </div>
   </>
  )
}

export default Home