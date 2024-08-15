import { HOMEPAGE_QUERY } from '@/sanity/queries'
import { getSanityData } from '@/utils/getSanityData'
import HomePageLeft from '@/components/HomePageLeft'
import HomePageRight from '@/components/HomePageRight'
import { Homepage } from '@/sanity/types'

const Landing = async () => {
  const { firstName, lastName, heroImage }: Homepage =
    await getSanityData(HOMEPAGE_QUERY)
  return (
    <div
      id="home"
      className="flex-between h-[calc(100vh-5rem)] max-md:flex-col max-md:justify-start"
    >
      <HomePageLeft heroImage={heroImage} />
      <HomePageRight firstName={firstName || ''} lastName={lastName || ''} />
    </div>
  )
}

export default Landing
