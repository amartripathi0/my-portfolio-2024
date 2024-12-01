import BackgroundBlur from '@/components/shared/BackgroundBlur'
import FreelanceWorkCard from '@/components/shared/freelance-work-card'
import PageLayout from '@/components/shared/page-layout'
import { BorderBeam } from '@/components/ui/border-beam'
import { FREELANCE_PAGE_QUERY } from '@/sanity/queries'
import { Freelance as FreelanceType } from '@/sanity/types'
import { getSanityData } from '@/utils/getSanityData'
import Link from 'next/link'

export default async function Freelance() {
  const { freelancesArray }: { freelancesArray: FreelanceType[] } =
    await getSanityData(FREELANCE_PAGE_QUERY)

  return (
    <PageLayout pageId="freelance-work" pageTitle="Freelance Work">
      <BackgroundBlur
        blurColor="purple"
        style="left-2/5 max-md:left-1/3 -top-6 h-40 blur-[150px] sm:h-64 sm:top-1/4"
      />
      <div className="relative">
        <p className="text-center text-base font-semibold text-neutral-300 sm:mb-4">
          Ready to elevate your online presence? Let&apos;s create something
          exceptional together!
        </p>
        <Link
          href={'#contact-me'}
          scroll
          className="-z-5 -top-24 right-6 hidden rotate-6 rounded-full p-2 text-sm font-semibold text-neutral-200 sm:absolute md:rotate-6 md:px-2.5 md:text-base"
        >
          <BorderBeam size={60} duration={5} borderWidth={2} delay={4.6} />
          <span className="underline decoration-purple-400">HIRE ME</span> — and
          Get It Done!
        </Link>
      </div>
      <Link
        href={'#contact-me'}
        scroll
        className="rounded-full p-2 text-sm font-semibold text-neutral-200 sm:hidden relative"
      >
        <BorderBeam size={60} duration={5} borderWidth={2} delay={4.6} />
        <span className="underline decoration-purple-400">HIRE ME</span> — and
        Get It Done!
      </Link>
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
