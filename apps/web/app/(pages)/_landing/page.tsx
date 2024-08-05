import { HOMEPAGE_QUERY } from '@/sanity/queries'
import { getSanityData } from '@/utils/getSanityData'
import HomePageLeft from '@/components/HomePageLeft'
import HomePageRight from '@/components/HomePageRight'
import { HomepageDataType } from '@/types'

const Landing = async () => {
  const { firstName, lastName, heroImage }: HomepageDataType = await getSanityData(HOMEPAGE_QUERY)
  return (
    <div
      id="home"
      className="h-[calc(100vh-5rem)] flex-between  max-tablet:flex-col max-sm:justify-start  max-sm:pt-10 "
    >
      <HomePageLeft
        heroImage={heroImage}
      />
      <HomePageRight
        firstName={firstName}
        lastName={lastName}
      />
    </div>
  )
}

export default Landing
