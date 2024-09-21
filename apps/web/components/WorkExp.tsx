import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

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
}: WorkExpProps) {
  return (
    <Card className="sm:h-60 3xl:h-64 w-full md:max-w-2xl rounded border-violet-950 bg-gradient-to-b from-zinc-950 via-black-950 to-violet-950 transition-all duration-300 md:hover:scale-105">
      <CardHeader className="flex flex-row items-center space-x-2 sm:space-x-4 p-3 sm:p-6">
        <Image
          src={companyImg}
          alt={`${companyName} logo`}
          width={64}
          height={64}
          className="aspect-square rounded-full text-xs sm:l max-sm: size-12 3xl:size-16 object-cover"
        />
        <div className="w-full">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg md:text-2xl 3xl:text-3xl font-bold">{companyName}</h3>
              <h3 className="text-base md:text-lg 3xl:text-xl font-medium text-neutral-100">
                {designation}
              </h3>
              <p className="font-poppins text-xs sm:text-sm font-normal text-neutral-300">
                {location}
              </p>
              <p className="font-poppins text-xs sm:text-sm sm:hidden font-medium text-neutral-300">
                {startDate} <span className="mx-1">to</span> {endDate}{' '}
              </p>
            </div>
            <div className="flex flex-col items-end sm:items-center gap-2">
              <div className="flex max-sm:flex-col gap-2">
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-sm sm:text-base 3xl:text-lg font-medium capitalize flex-center"
                >
                  {workType}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-slate-800 text-sm sm:text-base 3xl:text-lg font-medium capitalize"
                >
                  {workMode}
                </Badge>
              </div>

              <p className="font-poppins text-xs sm:text-sm max-sm:hidden font-medium text-gray-300">
                {startDate} <span className="mx-1">to</span> {endDate}{' '}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-poppins text-gray-300 line-clamp-4 text-sm 3xl:text-base">{description}</p>
      </CardContent>
    </Card>
  )
}
