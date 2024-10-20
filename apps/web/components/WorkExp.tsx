import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { cn } from '@/utils/cn'

interface WorkExpProps {
  companyName: string
  companyImg: string
  designation: string
  startDate: string
  endDate: string
  workType: 'Fulltime' | 'Intern' | 'Freelance'
  description: string
  location: string
  workMode: 'Onsite' | 'Remote'
  index: number
}

export default function WorkExpCard({
  companyName,
  companyImg,
  designation,
  workType,
  description,
  location,
  workMode,
  startDate,
  endDate,
  index,
}: WorkExpProps) {
  return (
    <Card
      className={cn(
        'w-full rounded border-violet-950 bg-gradient-to-b from-zinc-950 via-black-950 to-violet-950 transition-all duration-300 sm:h-60 md:max-w-2xl 3xl:h-64 hover:-translate-y-2',
        
      )}
    >
      <CardHeader className="flex flex-row items-center space-x-2 p-3 sm:space-x-4 sm:p-6">
        <Image
          src={companyImg}
          alt={`${companyName} logo`}
          width={64}
          height={64}
          className="sm:l max-sm: aspect-square size-12 rounded-full object-cover text-xs 3xl:size-16"
        />
        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold md:text-2xl 3xl:text-3xl">
                {companyName}
              </h3>
              <h3 className="text-base font-medium text-neutral-100 md:text-lg 3xl:text-xl">
                {designation}
              </h3>
              <p className="font-poppins text-xs font-normal text-neutral-300 sm:text-sm">
                {location}
              </p>
              <p className="font-poppins text-xs font-medium text-neutral-300 sm:hidden sm:text-sm">
                {startDate} <span className="mx-1">to</span> {endDate}{' '}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 sm:items-center">
              <div className="flex gap-2 max-sm:flex-col">
                <Badge
                  variant="secondary"
                  className="flex-center bg-zinc-800 text-sm font-medium capitalize sm:text-base 3xl:text-lg"
                >
                  {workType}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-sm font-medium capitalize sm:text-base 3xl:text-lg"
                >
                  {workMode}
                </Badge>
              </div>

              <p className="font-poppins text-xs font-medium text-gray-300 max-sm:hidden sm:text-sm">
                {startDate} <span className="mx-1">to</span> {endDate}{' '}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-4 font-poppins text-sm text-gray-300 3xl:text-base">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
