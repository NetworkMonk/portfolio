/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/solid'

export default function MyStory() {
  return (
    <div className="bg-white overflow-hidden" id="my-story">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl fira-mono">
              &gt; My Story
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="./img/IMG_7454.jpg"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-2xl text-gray-500">
                A little about me and how I started my journey in the world of development.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p className="mb-3">
                Tapes! You remember those? Back in the early 90s my room was covered in the things. I had an Amstrad 64,
                a hand me down from my father, it had a tape drive and a monochrome green screen.
              </p>
              <p className="mb-3">
                I loved my amstrad and used to enjoy the trips to macros to browse the game cassettes, but what I enjoyed more
                was getting the magazines that had printed reels of code, so that you could type the code and store it yourself
                to any old tape.
              </p>
              <p className="mb-3">
                It didn&apos;t take long for me to go off the reservation and start tweaking the games I was making. This started with
                a basic space invaders clone, but my favourite type of game to code were those old text adventures. That satisfied
                me in two different ways. I get to learn a skill, coding, but I also got to create interesting stories. None would
                make a best seller, but I enjoed it if nothing else.
              </p>
              <p className="mb-3">
                My interest in coding and development continued through my eduction and into college, where I would create 3D desktop
                games using C++ and DirectX 7. This was the time I discovered the joys of object oriented programming.
              </p>
              <p className="mb-3">
                My career started in IT support, a shy anxious young man who struggled to speak to strangers, ansering phones and
                visiting sites to resolve IT issues. It was a difficult, but concious descision to improve my soft skills, how I
                react and compose myself around people. I did make it my mission to make a career out of development and thankfully I have succeeded.
              </p>
              <p className="mb-5">
                My development career started around 7 years ago, since then I&apos;ve developed large, and small, web applications using a large
                variety of technologies and languages.
              </p>
              <p className="mb-3 text-2xl fira-mono">
                “Don&apos;t limit your challenges. Challenge your limits.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
