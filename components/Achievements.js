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
import StorageSolution from './achievements/StorageSolution'
import DevelopmentTeam from './achievements/DevelopmentTeam'
import HostedInfrastructure from './achievements/HostedInfrastructure'

export default function Achievements() {
  return (
    <div className="overflow-hidden bg-zinc-900" id="achievements">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl fira-mono">
              &gt; Achievements
            </h2>
          </div>
        </div>
        <div className="mt-8">
          <div className="mt-8 mb-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-300">
                Some key projects that I have been involved with.
              </p>
            </div>
            <div>
              <DevelopmentTeam />
              <StorageSolution />
              <HostedInfrastructure />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
