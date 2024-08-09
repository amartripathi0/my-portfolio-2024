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
      className="flex-between max-md:flex-col h-[calc(100vh-5rem)] max-md:justify-start pt-10 md:pt-0"
    >
      <HomePageLeft heroImage={heroImage} />
      <HomePageRight firstName={firstName || ''} lastName={lastName || ''} />
    </div>
  )
}

export default Landing
