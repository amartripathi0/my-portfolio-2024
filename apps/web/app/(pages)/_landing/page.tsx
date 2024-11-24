import { HOMEPAGE_QUERY } from '@/sanity/queries'
import { getSanityData } from '@/utils/getSanityData'
import HomePageLeft from '@/components/HomePageLeft'
import HomePageRight from '@/components/HomePageRight'
import { Homepage } from '@/sanity/types'

const Landing = async () => {
  const { firstName, lastName, heroImage }: Homepage =
    await getSanityData(HOMEPAGE_QUERY)
  return (
    <section
      id="home"
      className="flex-between py-12 max-md:flex-col max-md:justify-start md:py-28"
    >
      <HomePageLeft heroImage={heroImage} />
      <HomePageRight firstName={firstName || ''} lastName={lastName || ''} />
    </section>
  )
}

export default Landing
