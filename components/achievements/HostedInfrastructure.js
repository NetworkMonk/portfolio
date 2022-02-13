import {
  ServerIcon,
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
                src="/img/taylor-vick-M5tzZtFCOfs-unsplash.jpg"
                alt="Development Team"
                layout="fill"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
          <div className="relative">
            <h3 className="text-xl font-medium text-gray-100 tracking-wide">
              <ServerIcon className="h-6 w-6 inline mr-2 -mt-1" aria-hidden="true" />
              Hosted Infrastructure
            </h3>
            <blockquote className="mt-6 text-white">
              <p className="font-medium mb-3">
                The company I was working for needed to have an additional option of hosting remote desktop solutions,
                a business email solution and custom websites.
              </p>
              <p className="font-medium mb-3">
                I proposed a solution where we created our own hosted cloud infrastructure to contain all of the above.
                I put together a pricing document, which allowed us to calculate at what point the solution would be profitable.
                From there, the business gave me the instruction to implement, which I did.
              </p>
              <p className="font-medium">
                I was very pleased with the resulting infrastructure, which was incredibly reliable and helped the business to
                offer a number of new solutions to our customer base.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
