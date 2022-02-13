import {
  UserGroupIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

export default function Achievement() {
  return (
    <div className="py-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 px-8 bg-violet-800 shadow-2xl overflow-hidden lg:px-16">
          <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
            <div className="relative h-full w-full object-cover">
              <Image
                src="/img/annie-spratt-QckxruozjRg-unsplash.jpg"
                alt="Development Team"
                layout="fill"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
          <div className="relative">
            <h3 className="text-xl font-medium text-gray-100 tracking-wide">
              <UserGroupIcon className="h-6 w-6 inline mr-2 -mt-1" aria-hidden="true" />
              Development Team
            </h3>
            <blockquote className="mt-6 text-white">
              <p className="font-medium mb-3">
                I&apos;ve had the absolute pleasure of creating a new internal development team from scratch. This has come
                with a number of challenges that have been completely new to me, but I have loved every second of it.
              </p>
              <p className="font-medium mb-3">
                This has involved all of the following. Writing job descriptions, performing interviews on boarding and
                performing inductions in the company and Organising project work for others as well as myself.
              </p>
              <p className="font-medium">
                This has been an incredible journey for me and I&apos;m very proud of what we have achieved and continue to
                achieve as a team.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
