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
import Skill from './Skill'

export default function Skills() {
  return (
    <div className="overflow-hidden" id="skills">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl fira-mono">
              &gt; Skills
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">

          <div className="mt-8 mb-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                How I guage my skill set and confidence with each language and technology.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p className="mb-3">
                Just because something isn&apos;t listed here, doesn&apos;t mean I&apos;m not interested in it, I&apos;m
                always keen to learn something new.
              </p>
            </div>
          </div>

          <div className="relative col-start-2">
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <Skill title="HTML5" percent="97.5" />
              <Skill title="CSS" percent="97.5" />
              <Skill title="PHP" percent="95" />
              <Skill title="JavaScript" percent="90" />
              <Skill title="tailwindcss" percent="85" />
              <Skill title="Laravel" percent="80" />
              <Skill title="React" percent="80" />
              <Skill title="Next.js" percent="80" />
              <Skill title="Bootstrap" percent="75" />
              <Skill title="WordPress" percent="65" />
              <Skill title="Node.js" percent="60" />
              <Skill title="SuiteScript" percent="60" />
              <Skill title="Go" percent="55" />
              <Skill title="Unity" percent="50" />
              <Skill title="C#" percent="45" />
              <Skill title="C++" percent="40" />



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
