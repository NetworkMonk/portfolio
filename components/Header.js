/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { CameraIcon } from '@heroicons/react/solid'
import Image from 'next/image'


const navigation = [
  { name: 'My Story', href: '#my-story' },
  { name: 'Skills', href: '#skills' },
  { name: 'Get In Touch', href: '#get-in-touch' },
]

export default function Header() {
  return (
    <div>
      <header>
        <Popover className="relative">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <Image
                  src="/img/40229991.png"
                  width={80}
                  height={80}
                  alt='James Plant'
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-violet-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base text-gray-200 hover:text-violet-300 transition-all duration-500 fira-mono font-bold border-transparent hover:border-violet-300 border-b">
                  &gt; {item.name}
                </a>
              ))}
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image
                        src="/img/40229991.png"
                        width={40}
                        height={40}
                        alt='James Plant'
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid grid-cols-1 gap-7">
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-1 gap-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700 fira-mono"
                      >
                        &gt; {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>

          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative mb-16">
            <div className="absolute inset-x-0 bottom-0 h-1/2" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/img/fotis-fotopoulos-SyvsTmuuZyM-unsplash.jpg"
                      alt="Developer Setup"
                      layout='fill'
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white fira-mono">&gt; James Plant</span>
                    <span className="block text-gray-200 fira-mono text-2xl mt-5">Full Stack Developer based in Essex, UK</span>
                  </h1>
                  <p className="mt-6 mx-auto text-left text-xl text-gray-200">
                    A developer who thinks about strange things, like how to measure and improve efficiency in the work day,
                    how can I be more productive with my time? And how can we change the way we think about technology?
                  </p>
                  <p className="mt-6 mx-auto text-left text-sm text-gray-100 opacity-75">
                    <CameraIcon className="w-4 h-4 inline mb-1" /> Photo by <a href="https://unsplash.com/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">
                      Fotis Fotopoulos
                    </a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* More main page content here... */}
      </main>
    </div>
  )
}
