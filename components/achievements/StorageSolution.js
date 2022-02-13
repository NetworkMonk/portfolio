import {
  DatabaseIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'

export default function Achievement() {
  return (
    <div className="py-10">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 px-8 bg-gray-200 shadow-2xl overflow-hidden lg:px-16">
          <div className="absolute inset-0 opacity-25 filter saturate-0 mix-blend-multiply">
            <div className="relative h-full w-full object-cover">
              <Image
                src="/img/joshua-coleman-ZVkDLrXGMdw-unsplash.jpg"
                alt="Development Team"
                layout="fill"
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
          <div className="relative">
            <h3 className="text-xl font-medium text-gray-900 tracking-wide">
              <DatabaseIcon className="h-6 w-6 inline mr-2 -mt-1" aria-hidden="true" />
              Storage Solution
            </h3>
            <blockquote className="mt-6 text-gray-900">
              <p className="font-medium mb-3">
                I was tasked with building a storage solution from the ground up without relying on any existing service
                providers. The solution was able to be installed to any server and hosted several endpoints that allowed
                the creation of organisation accounts and standard CRUD functions for file access.
              </p>
              <p className="font-medium mb-3">
                I was able to create a cloud storage solution that was able to incorporate AES-256 bit encryption for files
                at rest and in transit, compression and block level data de-duplication. This was developed entirely in Go lang.
              </p>
              <p className="font-medium">
                The result was a storage solution that could potentially save expensive storage space, using only the
                absolute minimum physical space, was incredibly secure and very performant.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
