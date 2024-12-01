import FreelanceWorkCard from '@/components/shared/freelance-work-card'
import PageLayout from '@/components/shared/page-layout'
import { FREELANCE_PAGE_QUERY } from '@/sanity/queries'
import { Freelance as FreelanceType } from '@/sanity/types'
import { getSanityData } from '@/utils/getSanityData'

export default async function Freelance() {
  const { freelancesArray }: { freelancesArray: FreelanceType[] } =
    await getSanityData(FREELANCE_PAGE_QUERY)

  return (
    <PageLayout pageId="freelance-work" pageTitle="Freelance Work">
      <div className="text-center">
        <p className="text-base font-semibold text-neutral-300">
          Ready to elevate your online presence? Let&apos;s create something
          exceptional together!
        </p>
      </div>
      <div className="mt-2 flex justify-between gap-4 max-md:flex-col sm:gap-4 lg:justify-center lg:px-8 xl:gap-10">
        {freelancesArray?.map(
          ({
            freelanceTitle,
            freelanceDeployedLink,
            freelanceThumbnails,
          }: FreelanceType) => (
            <FreelanceWorkCard
              key={freelanceTitle}
              freelanceTitle={freelanceTitle}
              freelanceThumbnails={freelanceThumbnails}
              freelanceDeployedLink={freelanceDeployedLink}
            />
          ),
        )}
      </div>
    </PageLayout>
  )
}
